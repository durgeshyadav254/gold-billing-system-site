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
          className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            light ? "text-gold-light" : "text-lotus"
          }`}
        >
          <span
            className={`h-px w-8 ${light ? "bg-gold-light/40" : "bg-lotus/40"}`}
          />
          {eyebrow}
          <span
            className={`h-px w-8 ${light ? "bg-gold-light/40" : "bg-lotus/40"}`}
          />
        </p>
      )}
      <h2
        className={`font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
