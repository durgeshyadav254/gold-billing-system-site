import type { Metadata } from "next";
import { FEATURES } from "@/lib/site";
import { FeatureIcon } from "@/components/shared/FeatureIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "RiseGold features — GST billing, inventory, rates, reports, offline backup and more for jewellery shops.",
};

export default function FeaturesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Features"
          title="Built for the jewellery counter"
          subtitle="Every module in RiseGold desktop software — ready for daily gold sales."
        />
        <div className="mt-16 space-y-10">
          {FEATURES.map((f) => (
            <article
              key={f.slug}
              id={f.slug}
              className="card-luxury group relative scroll-mt-24 p-7 sm:p-9"
            >
              <span className="pointer-events-none absolute top-0 left-0 h-12 w-12 rounded-tl-2xl border-t-2 border-l-2 border-gold/0 transition-colors group-hover:border-gold/30" />
              <span className="pointer-events-none absolute right-0 bottom-0 h-12 w-12 rounded-br-2xl border-r-2 border-b-2 border-gold/0 transition-colors group-hover:border-gold/30" />
              <div className="flex flex-col gap-7 md:flex-row md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lotus-soft to-lotus/10 text-lotus shadow-sm transition-all group-hover:shadow-lg group-hover:shadow-lotus/20">
                  <FeatureIcon name={f.icon} className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    {f.title}
                  </h2>
                  <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light" />
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {f.short}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10">
                          <Check
                            className="h-3 w-3 text-success"
                            aria-hidden
                          />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <ButtonLink href="/buy/">Buy RiseGold licence</ButtonLink>
        </div>
      </div>
    </div>
  );
}
