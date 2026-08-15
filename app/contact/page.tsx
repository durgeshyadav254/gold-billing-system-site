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
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to sales"
          subtitle="Prefer WhatsApp for fastest reply. Or fill the form — it opens a pre-filled chat."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                WhatsApp
              </p>
              <p className="font-mono mt-2 text-3xl font-semibold text-ink">
                {SITE.whatsapp}
              </p>
              <ButtonLink
                href={whatsappLink()}
                external
                className="mt-5"
              >
                Open WhatsApp chat
              </ButtonLink>
            </div>
            <div className="rounded-2xl border border-line bg-canvas-alt p-6 text-sm text-muted">
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
