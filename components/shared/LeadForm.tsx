"use client";

import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

type Props = {
  intent?: "buy" | "demo" | "support";
};

export function LeadForm({ intent = "buy" }: Props) {
  const [name, setName] = useState("");
  const [shop, setShop] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      intent === "buy"
        ? `Hi RiseGold, I want to BUY ${SITE.name} (${SITE.price}).`
        : intent === "demo"
          ? `Hi RiseGold, I want a demo of ${SITE.name}.`
          : `Hi RiseGold, I need support for ${SITE.name}.`,
      "",
      `Name: ${name}`,
      `Shop: ${shop}`,
      `Phone: ${phone}`,
      city ? `City: ${city}` : "",
      note ? `Message: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(lines), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Your name *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-ink outline-none transition focus:border-lotus"
            placeholder="Ramesh Sharma"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Shop name *</span>
          <input
            required
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className="w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-ink outline-none transition focus:border-lotus"
            placeholder="Sharma Jewellers"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            WhatsApp number *
          </span>
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-ink outline-none transition focus:border-lotus"
            placeholder="98XXXXXXXX"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">City</span>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-ink outline-none transition focus:border-lotus"
            placeholder="Gorakhpur"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-ink">Message</span>
          <textarea
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full resize-y rounded-xl border border-line bg-canvas px-3.5 py-2.5 text-ink outline-none transition focus:border-lotus"
            placeholder="I want to buy the shop licence / need a demo…"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-lotus px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_#F6247752] transition hover:bg-lotus-hover sm:w-auto"
      >
        Send on WhatsApp →
      </button>
      <p className="mt-3 text-xs text-muted">
        Opens WhatsApp chat with{" "}
        <span className="font-mono font-medium text-ink">{SITE.whatsapp}</span>.
        No account needed on this website — we reply on WhatsApp.
      </p>
    </form>
  );
}
