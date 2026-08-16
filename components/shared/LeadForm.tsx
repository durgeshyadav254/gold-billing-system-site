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
        ? `Hi RiseGold, I want to BUY ${SITE.name} Shop Licence (${SITE.price}). Please send UPI details and an RGB1 key.`
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
      className="gold-corners relative rounded-2xl border border-gold/25 bg-paper p-6 shadow-xl shadow-gold/5 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Your name *</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-luxury"
            placeholder="Ramesh Sharma"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">Shop name *</span>
          <input
            required
            value={shop}
            onChange={(e) => setShop(e.target.value)}
            className="input-luxury"
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
            className="input-luxury"
            placeholder="98XXXXXXXX"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">City</span>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-luxury"
            placeholder="Gorakhpur"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-medium text-ink">Message</span>
          <textarea
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="input-luxury resize-y"
            placeholder="I want to buy the shop licence / need a demo…"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn-shine group relative mt-6 w-full rounded-xl bg-gradient-to-b from-lotus to-lotus-hover px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-lotus/30 transition-all hover:shadow-xl hover:shadow-lotus/40 sm:w-auto"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Send on WhatsApp
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>
      <p className="mt-3 text-xs text-muted">
        Opens WhatsApp chat with{" "}
        <span className="font-mono font-medium text-ink">{SITE.whatsapp}</span>.
        No account needed on this website — we reply on WhatsApp.
      </p>
    </form>
  );
}
