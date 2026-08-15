import type { Metadata } from "next";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LeadForm } from "@/components/shared/LeadForm";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy",
  description:
    "Buy RiseGold jewellery billing software. Pay via WhatsApp and get the Windows installer.",
};

export default function BuyPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Purchase"
          title="Buy RiseGold"
          subtitle={`Licence ${SITE.price} · After payment we send the Windows installer download link on WhatsApp.`}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <ol className="space-y-5">
              {[
                "Tap WhatsApp or fill the form — share your shop name.",
                "We share UPI / bank payment details.",
                "After payment confirmation, you receive the installer link.",
                "Install on Windows 10/11 and start billing the same day.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-soft text-sm font-semibold text-gold-deep">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-ink">{step}</p>
                </li>
              ))}
            </ol>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-5 transition hover:bg-[#25D366]/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="font-semibold text-ink">Chat to buy now</p>
                <p className="font-mono text-lg text-[#128C7E]">
                  {SITE.whatsapp}
                </p>
              </div>
            </a>

            <div className="mt-6 rounded-2xl border border-line bg-canvas-alt p-5 text-sm text-muted">
              <p className="font-medium text-ink">What you get</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Windows installer (.exe)</li>
                <li>Full shop licence features</li>
                <li>WhatsApp setup help</li>
              </ul>
              <p className="mt-4 text-ink">Already paid?</p>
              <ButtonLink href="/download/" variant="outline" className="mt-2">
                Go to download page
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-lotus">
              Or fill this form
            </p>
            <LeadForm intent="buy" />
          </div>
        </div>
      </div>
    </div>
  );
}
