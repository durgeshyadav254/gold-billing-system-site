import type { Metadata } from "next";
import { SITE, whatsappLink } from "@/lib/site";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Download, Monitor, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download RiseGold Windows installer after purchase. System requirements and setup steps.",
};

export default function DownloadPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Download"
          title="Windows installer"
          subtitle="Buyers receive the download link on WhatsApp after payment. You can also host the .exe under /downloads/."
        />

        <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8">
          <div className="flex items-start gap-3 rounded-xl bg-gold-soft/60 px-4 py-3 text-sm text-gold-deep">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              Public download is unlocked after purchase confirmation. If you
              already paid, ask for the link on WhatsApp{" "}
              <a
                href={whatsappLink(
                  "Hi, I paid for RiseGold. Please send my installer download link."
                )}
                className="font-semibold underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.whatsapp}
              </a>
              .
            </p>
          </div>

          <a
            href={SITE.downloadUrl}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-lotus px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_#F6247752] transition hover:bg-lotus-hover"
          >
            <Download size={18} />
            Download RiseGold Setup (.exe)
          </a>
          <p className="mt-3 text-center text-xs text-muted">
            File path: <span className="font-mono">{SITE.downloadUrl}</span>
            <br />
            Upload your installer to{" "}
            <span className="font-mono">public/downloads/</span> before go-live.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-canvas-alt p-6">
          <div className="flex items-center gap-2 text-ink">
            <Monitor size={18} className="text-gold" />
            <h2 className="font-display text-2xl font-semibold">
              System requirements
            </h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Windows 10 or Windows 11 (64-bit)</li>
            <li>~200 MB free disk space</li>
            <li>Printer optional (A4 for tax invoices)</li>
            <li>No internet needed after install</li>
          </ul>
        </div>

        <div className="mt-8 space-y-3 text-sm text-muted">
          <h2 className="font-display text-2xl font-semibold text-ink">
            First launch
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Run the installer and open RiseGold Billing.</li>
            <li>Enter shop name and create a 4–8 digit PIN.</li>
            <li>Settings → Shop: add GSTIN, address, bank details.</li>
            <li>Set today’s gold rate, then create your first bill.</li>
          </ol>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/buy/">Buy licence first</ButtonLink>
          <ButtonLink href={whatsappLink()} variant="outline" external>
            WhatsApp support
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
