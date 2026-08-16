import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";

export const metadata: Metadata = {
  title: "About",
  description:
    "About RiseGold — offline jewellery billing software for Indian gold retailers.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title="Billing that respects the shop floor"
        />
        <div className="relative mt-12 space-y-6 text-base leading-relaxed text-muted">
          <blockquote className="relative border-l-4 border-gold pl-6 text-lg text-ink italic">
            <span className="font-display pointer-events-none absolute -top-4 -left-2 text-6xl text-gold/20">
              “
            </span>
            Built for owners who need GST-ready invoices without a cloud
            subscription.
          </blockquote>
          <p className="first-letter:font-display first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-gold">
            RiseGold is a Windows desktop app for single-shop gold jewellery
            retailers. It was built for owners who need GST-ready invoices,
            accurate metal calculations, and customer history — without paying
            forever for cloud software or depending on unstable internet.
          </p>
          <p>
            Your data lives on your laptop. You print A4 tax invoices, back up
            locally with one click, and export reports your CA can use. A
            30-day trial starts on first install. When you buy a Shop Licence,
            we send an RGB1 key on WhatsApp — optional Cloud Protect can ride
            on the same key.
          </p>
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-gold-soft/50 to-canvas p-8">
            <p className="mb-3 text-xs font-bold tracking-widest text-gold-deep uppercase">
              Our Mission
            </p>
            <p className="font-display text-2xl leading-snug font-semibold text-ink">
              Make jewellery billing simple, accurate, and owned by the shop —
              not locked behind a subscription.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/download/">Start 30-day trial</ButtonLink>
          <ButtonLink href="/buy/" variant="outline">
            Buy a shop licence
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
