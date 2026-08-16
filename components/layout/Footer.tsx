import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";
import { BrandLogo } from "@/components/shared/BrandLogo";

const explore = [
  { href: "/features/", label: "Features" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/buy/", label: "Buy licence" },
  { href: "/download/", label: "Download" },
  { href: "/contact/", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-ink-dark text-paper">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gold/8 to-transparent" />
      <div className="pointer-events-none absolute top-4 left-4 h-16 w-16 rounded-tl-3xl border-t-2 border-l-2 border-gold/20" />
      <div className="pointer-events-none absolute top-4 right-4 h-16 w-16 rounded-tr-3xl border-t-2 border-r-2 border-gold/20" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-14 w-14 overflow-hidden rounded-xl border border-gold/40 bg-black shadow-lg shadow-gold/10">
              <BrandLogo height={56} className="h-14 w-14" />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
            </span>
            <p className="font-display text-3xl font-semibold">
              Rise<span className="gold-shimmer-text">Gold</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Offline jewellery billing for Indian gold shops — 30-day trial, then
            a one-time Shop Licence. GST invoices, inventory, rates & reports.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-xs text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              30-day trial
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              GST Ready
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
              100% Offline
            </span>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center text-white/70 transition hover:text-white"
                >
                  <span className="mr-2 h-px w-0 bg-gold transition-all group-hover:w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
            Sales & Support
          </p>
          <div className="mt-5 space-y-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gold/20 bg-white/5 p-4 transition hover:border-gold/40 hover:bg-white/10"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-light/70">
                WhatsApp
              </p>
              <p className="mt-1 font-mono text-xl text-gold-light">
                {SITE.whatsapp}
              </p>
            </a>
            <p className="text-sm text-white/60">
              Email:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/80 hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
            <p className="text-sm text-white/55">
              <Link href="/privacy/" className="hover:text-white">
                Privacy
              </Link>
              {" · "}
              <Link href="/terms/" className="hover:text-white">
                Terms
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/40 sm:px-6">
          © {new Date().getFullYear()} {SITE.name}. Crafted for jewellery
          retailers in India.
        </p>
      </div>
    </footer>
  );
}
