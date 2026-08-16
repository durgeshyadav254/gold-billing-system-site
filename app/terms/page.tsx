import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed text-muted sm:px-6 sm:py-24">
      <p className="text-label-luxury text-lotus">Legal</p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-ink">
        Terms
      </h1>
      <div className="foil-line mt-6" />
      <p className="mt-8">
        A new install includes a free {SITE.trialDays}-day trial. Purchasing a{" "}
        {SITE.name} Shop Licence grants you the right to install and use the
        software on one Windows computer for your jewellery business, unless
        otherwise agreed in writing. Activate with the RGB1 key we send after
        payment.
      </p>
      <p className="mt-4">
        The software is provided as-is for billing assistance. You remain
        responsible for GST compliance, invoice accuracy, and backups of your
        local database. Optional Cloud Protect stores encrypted backups you
        control; it is sold separately and is not part of the trial. We are not
        liable for business losses arising from misuse, hardware failure, or
        failure to back up.
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
