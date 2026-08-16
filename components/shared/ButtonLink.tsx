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
    "btn-shine bg-gradient-to-b from-lotus to-lotus-hover text-white shadow-[0_10px_28px_-8px_#F6247752] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_#F6247766]",
  gold: "btn-shine btn-gold-metal",
  outline:
    "border-2 border-gold/55 bg-transparent text-gold-deep hover:border-gold hover:bg-gold/10",
  ghost:
    "bg-white/10 text-paper backdrop-blur-sm hover:bg-white/15 hover:shadow-[0_12px_28px_-12px_rgba(184,149,74,0.45)]",
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
