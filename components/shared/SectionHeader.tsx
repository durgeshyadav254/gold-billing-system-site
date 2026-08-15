type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${light ? "text-paper" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-gold-light" : "text-lotus"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
