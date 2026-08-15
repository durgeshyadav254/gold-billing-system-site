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
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Features"
          title="Built for the jewellery counter"
          subtitle="Every module in RiseGold desktop software — ready for daily gold sales."
        />
        <div className="mt-14 space-y-10">
          {FEATURES.map((f) => (
            <article
              key={f.slug}
              id={f.slug}
              className="scroll-mt-24 rounded-2xl border border-line bg-paper p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lotus-soft text-lotus">
                  <FeatureIcon name={f.icon} className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-semibold text-ink">
                    {f.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-muted">{f.short}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-success"
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center">
          <ButtonLink href="/buy/">Buy RiseGold licence</ButtonLink>
        </div>
      </div>
    </div>
  );
}
