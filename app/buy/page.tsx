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

const steps = [
  "Tap WhatsApp or fill the form — share your shop name.",
  "We share UPI / bank payment details.",
  "After payment confirmation, you receive the installer link.",
  "Install on Windows 10/11 and start billing the same day.",
];

export default function BuyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Purchase"
          title="Buy RiseGold"
          subtitle={`Licence ${SITE.price} · After payment we send the Windows installer download link on WhatsApp.`}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step} className="relative flex gap-5">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-ink-dark shadow-lg shadow-gold/30">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="absolute top-10 left-5 h-10 w-px bg-gradient-to-b from-gold to-gold/15" />
                  )}
                  <p className="pt-2 font-medium text-ink">{step}</p>
                </li>
              ))}
            </ol>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center gap-5 rounded-2xl border-2 border-[#25D366]/40 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 p-6 transition-all hover:border-[#25D366] hover:shadow-xl hover:shadow-[#25D366]/20"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform group-hover:scale-110">
                <MessageCircle size={26} />
              </div>
              <div>
                <p className="text-lg font-semibold text-ink">Chat to buy now</p>
                <p className="font-mono text-2xl font-bold text-[#128C7E]">
                  {SITE.whatsapp}
                </p>
              </div>
              <span className="ml-auto text-[#25D366] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </a>

            <div className="card-luxury mt-6 p-6 text-sm text-muted">
              <p className="font-medium text-ink">What you get</p>
              <ul className="mt-3 space-y-2">
                {[
                  "Windows installer (.exe)",
                  "Full shop licence features",
                  "WhatsApp setup help",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-ink">Already paid?</p>
              <ButtonLink href="/download/" variant="outline" className="mt-2">
                Go to download page
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-lotus uppercase">
              Or fill this form
            </p>
            <LeadForm intent="buy" />
          </div>
        </div>
      </div>
    </div>
  );
}
