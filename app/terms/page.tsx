import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-muted sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-ink">Terms</h1>
      <p className="mt-6">
        Purchasing a {SITE.name} shop licence grants you the right to install
        and use the software on one Windows computer for your jewellery
        business, unless otherwise agreed in writing.
      </p>
      <p className="mt-4">
        The software is provided as-is for billing assistance. You remain
        responsible for GST compliance, invoice accuracy, and backups of your
        local database. We are not liable for business losses arising from
        misuse, hardware failure, or failure to back up.
      </p>
      <p className="mt-4">
        Redistribution of the installer without permission is prohibited.
        Pricing and support terms may change for new purchases; existing
        licences keep the features delivered for that version.
      </p>
      <p className="mt-4">
        Questions: WhatsApp {SITE.whatsapp} or {SITE.email}.
      </p>
    </article>
  );
}
