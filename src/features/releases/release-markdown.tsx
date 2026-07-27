/* eslint-disable @next/next/no-img-element -- Release notes may reference arbitrary remote Markdown media. */
import type { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ReleaseMarkdownProps = {
  children: string;
};

function SafeLink(props: ComponentPropsWithoutRef<"a">) {
  const isExternal = props.href?.startsWith("http");
  return (
    <a
      {...props}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    />
  );
}

function SafeImage(props: ComponentPropsWithoutRef<"img">) {
  if (typeof props.src !== "string" || !props.src.trim()) {
    return null;
  }

  // Markdown media has unknown remote dimensions, so reserve a stable block.
  return (
    <img
      {...props}
      src={props.src}
      loading="lazy"
      alt={props.alt ?? ""}
    />
  );
}

export function ReleaseMarkdown({ children }: ReleaseMarkdownProps) {
  if (!children.trim()) {
    return (
      <p className="empty-markdown">
        No release notes were provided for this version.
      </p>
    );
  }
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        skipHtml
        components={{ a: SafeLink, img: SafeImage }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
