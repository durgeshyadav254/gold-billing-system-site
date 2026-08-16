"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { BrandLogo } from "@/components/shared/BrandLogo";

const links = [
  { href: "/features/", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/buy/", label: "Buy" },
  { href: "/download/", label: "Download" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="RiseGold home"
        >
          <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-gold/30 bg-ink-dark shadow-sm">
            <BrandLogo height={36} priority className="h-9 w-9" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Rise<span className="text-gold">Gold</span>
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:block">
              Billing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-lotus px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_28px_-8px_#F6247752] transition hover:bg-lotus-hover"
          >
            WhatsApp · {SITE.whatsapp}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-lotus px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
