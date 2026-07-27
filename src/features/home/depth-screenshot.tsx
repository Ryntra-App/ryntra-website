import Image from "next/image";

type DepthScreenshotProps = {
  src: string;
  alt: string;
};

export function DepthScreenshot({ src, alt }: DepthScreenshotProps) {
  return (
    <div className="feature-depth">
      <Image
        src={src}
        alt={alt}
        width={810}
        height={1800}
        sizes="(max-width: 767px) 86vw, (max-width: 1200px) 48vw, 640px"
      />
    </div>
  );
}
