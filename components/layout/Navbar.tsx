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
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-canvas/95">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="RiseGold home"
        >
          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-br from-ink-dark to-ink-darkest shadow-lg">
            <span className="absolute top-0 left-0 h-3 w-3 rounded-tl-lg border-t-2 border-l-2 border-gold/50" />
            <BrandLogo height={44} priority className="h-11 w-11" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.4rem] font-semibold tracking-tight text-ink sm:text-2xl">
              Rise<span className="gold-gradient-text">Gold</span>
            </span>
            <span className="mt-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-gold sm:block">
              Premium Billing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-luxury text-sm font-bold text-muted transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group relative rounded-xl bg-lotus px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-lotus/25 transition-all hover:bg-lotus-hover hover:shadow-xl hover:shadow-lotus/30"
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
        <div className="border-t border-gold/15 bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-bold text-ink"
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
