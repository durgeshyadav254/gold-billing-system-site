import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "lotus" | "gold" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

const styles = {
  lotus:
    "bg-lotus text-white shadow-[0_10px_28px_-8px_#F6247752] hover:bg-lotus-hover",
  gold: "bg-gold text-ink hover:bg-gold-light",
  outline:
    "border border-gold/50 bg-transparent text-ink hover:border-gold hover:bg-gold-soft/40",
  ghost: "bg-white/10 text-paper hover:bg-white/15",
};

export function ButtonLink({
  href,
  children,
  variant = "lotus",
  className = "",
  external,
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
