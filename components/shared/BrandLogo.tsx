import Image from "next/image";

type Props = {
  /** Height in px — width scales with object-contain */
  height?: number;
  className?: string;
  /** Prefer square mark for tight spaces */
  variant?: "mark" | "full";
  priority?: boolean;
};

/**
 * RiseGold company logo.
 * mark = /icon.png (square R)
 * full = /logo.png (same asset family; use for larger brand moments)
 */
export function BrandLogo({
  height = 36,
  className = "",
  variant = "mark",
  priority = false,
}: Props) {
  const src = variant === "full" ? "/logo.png" : "/icon.png";
  const width = Math.round(height * (variant === "full" ? 1.2 : 1));

  return (
    <Image
      src={src}
      alt="RiseGold"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
