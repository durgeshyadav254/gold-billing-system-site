"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowDownToLine, Gem, MessageCircle, ShieldCheck, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const paidMessage =
  "Hi, I paid for RiseGold. Please send my installer download link and RGB1 licence key.";

export function InstallerVault() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const continueRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    continueRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div className="gold-corners relative mt-12 overflow-hidden rounded-[1.75rem] border border-gold/35 bg-paper shadow-[0_24px_48px_-28px_rgba(122,95,44,0.35)]">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-gold-light via-gold to-gold-deep" />

        <div className="px-6 pt-7 pb-7 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold-soft text-gold-deep">
                <Gem size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {SITE.name} Billing
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  Trial starts on first launch · v{SITE.installer.version} ·{" "}
                  {SITE.installer.arch}
                </p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-gold/40 bg-gradient-to-r from-gold-soft to-gold-200 px-3.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-gold-deep uppercase">
              {SITE.trialDays}-day trial
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn-shine btn-gold-metal mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-sm font-semibold"
          >
            <ArrowDownToLine size={18} aria-hidden />
            Download {SITE.trialDays}-day trial
          </button>

          <ul className="mt-5 flex flex-wrap gap-2">
            {[
              SITE.installer.filename,
              SITE.installer.platform,
              SITE.installer.released,
            ].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-canvas px-3 py-1 text-[11px] font-medium tracking-wide text-muted"
              >
                {chip}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(paidMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gold-deep hover:text-ink"
          >
            <MessageCircle size={15} aria-hidden />
            Paid already? Ask for the link on WhatsApp
          </a>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-muted">
        No licence key for the trial. After you buy, paste the RGB1 key under
        Settings → License. First launch may show a Windows publisher check.
      </p>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink-dark/70"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="gold-corners relative w-full max-w-lg overflow-hidden rounded-3xl border border-gold/30 bg-paper shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-start gap-3 border-b border-gold/15 bg-canvas px-5 py-5 sm:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold-soft text-gold-deep">
                <ShieldCheck size={22} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <h2
                  id={titleId}
                  className="font-display text-2xl font-semibold text-ink"
                >
                  A one-time Windows check
                </h2>
                <p className="mt-1 text-sm text-muted">
                  New shop software often sees this. It is a publisher prompt,
                  not a virus.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-muted hover:bg-gold-soft/60 hover:text-ink"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 px-5 py-5 sm:px-6">
              <ol className="space-y-4">
                {[
                  {
                    n: "I",
                    text: (
                      <>
                        If Windows says it protected your PC, open{" "}
                        <strong className="font-semibold text-ink">
                          More info
                        </strong>
                        .
                      </>
                    ),
                  },
                  {
                    n: "II",
                    text: (
                      <>
                        Then choose{" "}
                        <strong className="font-semibold text-ink">
                          Run anyway
                        </strong>{" "}
                        to start the RiseGold setup.
                      </>
                    ),
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-3">
                    <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold-soft text-sm font-semibold text-gold-deep">
                      {step.n}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="rounded-2xl border border-gold/25 bg-gold-soft/40 px-4 py-3 text-sm text-gold-deep">
                Shop invoices stay on your laptop. RiseGold does not host your
                bills. A signed publisher name will replace “Unknown publisher”
                on later builds.
              </div>
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-line px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:bg-canvas"
              >
                Not now
              </button>
              <a
                ref={continueRef}
                href={SITE.downloadUrl}
                onClick={() => setOpen(false)}
                className="btn-shine btn-gold-metal inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold"
              >
                <ArrowDownToLine size={16} aria-hidden />
                Continue to trial file
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
