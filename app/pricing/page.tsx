import type { Metadata } from "next";
import { PRICING, SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: `RiseGold shop licence ${SITE.price} one-time. Optional priority support.`,
};

export default function PricingPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={PRICING.headline}
          subtitle="Pay once. Installer sent on WhatsApp after confirmation."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PRICING.plans.map((plan) => (
            <article
              key={plan.id}
              className={`rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? "border-lotus/40 bg-paper shadow-[0_24px_60px_-30px_#F6247755]"
                  : "border-line bg-canvas-alt"
              }`}
            >
              {plan.featured && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-lotus">
                  Most popular
                </p>
              )}
              <h2 className="font-display text-3xl font-semibold text-ink">
                {plan.name}
              </h2>
              <p className="mt-4">
                <span className="font-mono text-4xl font-semibold text-ink">
                  {plan.price}
                </span>
                <span className="ml-2 text-sm text-muted">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href={
                    plan.id === "licence"
                      ? "/buy/"
                      : whatsappLink(
                          `Hi RiseGold, I want Priority Support (₹999/year) for ${SITE.name}.`
                        )
                  }
                  external={plan.id !== "licence"}
                  variant={plan.featured ? "lotus" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
          Need a custom quote for multiple shops? Message{" "}
          <a
            href={whatsappLink("Hi, I need multi-shop licences.")}
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
