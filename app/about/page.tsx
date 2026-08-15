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
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title="Billing that respects the shop floor"
        />
        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
          <p>
            RiseGold is a Windows desktop app for single-shop gold jewellery
            retailers. It was built for owners who need GST-ready invoices,
            accurate metal calculations, and customer history — without paying
            forever for cloud software or depending on unstable internet.
          </p>
          <p>
            Your data lives on your laptop. You print A4 tax invoices, back up
            with one click, and export reports your CA can use. When you buy a
            licence, we deliver the installer and help you set up over WhatsApp.
          </p>
          <p className="font-medium text-ink">
            Mission: make jewellery billing simple, accurate, and owned by the
            shop — not locked behind a subscription.
          </p>
        </div>
        <div className="mt-10">
          <ButtonLink href="/buy/">Buy a shop licence</ButtonLink>
        </div>
      </div>
    </div>
  );
}
