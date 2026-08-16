import type { Metadata } from "next";
import { PRICING, SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: `RiseGold 30-day free trial, then Shop Licence ${SITE.price} one-time. Optional Cloud Protect and Priority Support.`,
};

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={PRICING.headline}
          subtitle="Pay via WhatsApp / UPI. After a Shop Licence we send the installer link and an RGB1 key."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {PRICING.plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative p-8 sm:p-10 ${
                plan.featured
                  ? "card-featured"
                  : "card-luxury bg-canvas-alt"
              }`}
            >
              {plan.featured && (
                <>
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-20 blur-sm" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-5 py-2 text-xs font-bold tracking-wider text-ink-dark uppercase shadow-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-dark/30" />
                      {plan.badge ?? "Most Popular"}
                      <span className="h-1.5 w-1.5 rounded-full bg-ink-dark/30" />
                    </span>
                  </div>
                </>
              )}
              <h2 className="font-display relative text-3xl font-semibold text-ink">
                {plan.name}
              </h2>
              <p className="relative mt-6">
                <span
                  className={`font-display text-5xl font-bold ${
                    plan.featured ? "gold-gradient-text" : "text-ink"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-muted">{plan.period}</span>
              </p>
              <ul className="relative mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.featured ? "text-gold" : "text-success"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="relative mt-10">
                <ButtonLink
                  href={plan.href}
                  external={plan.external}
                  variant={plan.variant}
                  className="w-full"
                >
                  {plan.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-muted">
          One Shop Licence is for one computer. Extra PCs or shops? Message{" "}
          <a
            href={whatsappLink("Hi, I need extra Shop Licences for more PCs.")}
            className="font-medium text-lotus hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.whatsapp}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
