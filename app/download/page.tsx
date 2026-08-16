import type { Metadata } from "next";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { InstallerVault } from "@/components/shared/InstallerVault";
import { Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download RiseGold for Windows. A 30-day free trial starts on first launch — no licence key.",
};

const requirements = [
  "Windows 10 or Windows 11 (64-bit)",
  "~200 MB free disk space",
  "Printer optional (A4 for tax invoices)",
  "No internet needed for billing after install",
];

export default function DownloadPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Counter vault"
          title="Start the 30-day trial"
          subtitle="Install on Windows. The trial begins automatically — no RGB1 key until you buy a Shop Licence."
        />

        <InstallerVault />

        <div className="card-luxury mt-8 p-6 text-sm text-muted">
          <p className="font-medium text-ink">Trial vs Shop Licence</p>
          <ul className="mt-3 space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {SITE.trialDays} days: full billing, GST invoices, local backup.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Cloud Protect is not included in the trial.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              After the trial, Save / Print need a paid RGB1 key (Settings →
              License).
            </li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-soft/30 to-canvas-alt p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
              <Monitor size={20} className="text-gold" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              What the laptop needs
            </h2>
          </div>
          <ul className="mt-5 space-y-3">
            {requirements.map((req) => (
              <li
                key={req}
                className="flex items-center gap-3 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-3 text-sm text-muted">
          <h2 className="font-display text-2xl font-semibold text-ink">
            First bill on day one
          </h2>
          <div className="gold-rule mx-0" />
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Run the installer and open RiseGold Billing.</li>
            <li>Enter shop name and create a 4–8 digit PIN.</li>
            <li>Settings → Shop: add GSTIN, address, bank details.</li>
            <li>Set today’s gold rate, then create your first bill.</li>
            <li>
              When you buy: paste the RGB1 key under Settings → License.
            </li>
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/buy/">Buy Shop Licence</ButtonLink>
          <ButtonLink href={whatsappLink()} variant="outline" external>
            WhatsApp support
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
