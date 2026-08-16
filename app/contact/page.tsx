import type { Metadata } from "next";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LeadForm } from "@/components/shared/LeadForm";
import { ButtonLink } from "@/components/shared/ButtonLink";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RiseGold sales and support on WhatsApp or submit the enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to sales"
          subtitle="Prefer WhatsApp for fastest reply — trial help, Shop Licence, Cloud Protect or Priority Support."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-paper to-gold-soft/20 p-8 shadow-xl shadow-gold/10">
              <p className="text-[10px] font-bold tracking-[0.3em] text-gold-deep uppercase">
                WhatsApp Sales
              </p>
              <p className="gold-gradient-text font-mono mt-3 text-4xl font-bold">
                {SITE.whatsapp}
              </p>
              <div className="foil-line my-5" />
              <ButtonLink
                href={whatsappLink()}
                external
                variant="gold"
                className="w-full"
              >
                Open WhatsApp Chat
              </ButtonLink>
            </div>
            <div className="card-luxury p-6 text-sm text-muted">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-medium text-ink hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-3">
                Typical reply time: same day on WhatsApp (business hours IST).
              </p>
              <p className="mt-3">
                For purchases use the{" "}
                <a href="/buy/" className="text-lotus hover:underline">
                  Buy page
                </a>
                .
              </p>
            </div>
          </div>
          <LeadForm intent="demo" />
        </div>
      </div>
    </div>
  );
}
