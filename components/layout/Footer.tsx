import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-semibold">
            Rise<span className="text-gold-light">Gold</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Offline jewellery billing for Indian gold shops — GST invoices,
            inventory, rates & reports on one Windows PC.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <Link href="/features/" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/buy/" className="hover:text-white">
                Buy licence
              </Link>
            </li>
            <li>
              <Link href="/download/" className="hover:text-white">
                Download
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Sales
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              WhatsApp:{" "}
              <a
                href={whatsappLink()}
                className="font-mono text-gold-light hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.whatsapp}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <Link href="/privacy/" className="hover:text-white">
                Privacy
              </Link>
              {" · "}
              <Link href="/terms/" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/45 sm:px-6">
          © {new Date().getFullYear()} {SITE.name}. Made for jewellery retailers
          in India.
        </p>
      </div>
    </footer>
  );
}
