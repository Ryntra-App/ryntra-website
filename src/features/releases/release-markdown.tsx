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
  // Markdown media has unknown remote dimensions, so reserve a stable block.
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} loading="lazy" alt={props.alt ?? ""} />;
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
