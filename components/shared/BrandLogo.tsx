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
 * Uses /logo.png (public) to avoid conflict with Next.js app/icon.png favicon route.
 */
export function BrandLogo({
  height = 36,
  className = "",
  variant = "mark",
  priority = false,
}: Props) {
  const width = Math.round(height * (variant === "full" ? 1.2 : 1));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="RiseGold"
      width={width}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={`object-contain ${className}`}
    />
  );
}
