import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-muted sm:px-6 sm:py-24">
      <p className="text-label-luxury text-lotus">Legal</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-ink">
        Privacy
      </h1>
      <div className="foil-line mt-6" />
      <p className="mt-8">
        {SITE.name} marketing website does not require an account. Lead forms
        open WhatsApp with the details you typed — we do not store form data on
        this website&apos;s servers (static site).
      </p>
      <p className="mt-4">
        The desktop application stores shop data locally on your computer
        (SQLite). We do not host your invoices unless you add Cloud Protect, an
        optional yearly backup add-on that stores encrypted copies you restore
        with a recovery passphrase.
      </p>
      <p className="mt-4">
        WhatsApp chats are subject to Meta&apos;s WhatsApp privacy policy.
        Contact us at {SITE.email} or WhatsApp {SITE.whatsapp} for privacy
        questions.
      </p>
    </article>
  );
}
