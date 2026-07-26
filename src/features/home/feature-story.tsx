import type { ReactNode } from "react";

import { DepthScreenshot } from "./depth-screenshot";

type FeatureStoryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition?: "start" | "end";
  contain?: boolean;
  children?: ReactNode;
};

export function FeatureStory({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  imagePosition = "end",
  contain = false,
  children,
}: FeatureStoryProps) {
  return (
    <section
      id={id}
      className={`feature-story image-${imagePosition}${contain ? " image-contain" : ""}`}
    >
      <div className="feature-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        {children}
      </div>
      <div className="feature-visual">
        <DepthScreenshot src={image} alt={imageAlt} />
      </div>
    </section>
  );
}
