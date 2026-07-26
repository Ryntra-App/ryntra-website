import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-mark">
      <Image
        src="/logo.png"
        alt=""
        width={compact ? 28 : 32}
        height={compact ? 28 : 32}
        priority
      />
      <span>Ryntra</span>
    </span>
  );
}
