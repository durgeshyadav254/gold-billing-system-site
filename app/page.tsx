import { ButtonLink } from "@/components/shared/ButtonLink";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { FeatureIcon } from "@/components/shared/FeatureIcon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SITE, FEATURES, STEPS, PAINS, FAQS, whatsappLink } from "@/lib/site";
import { Check, Shield, FileCheck, HardDrive, Lock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero — dark ink + foil invoice signature */}
      <section className="grain relative overflow-hidden bg-ink-dark text-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 70% -10%, #F6247730, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, #B8954A22, transparent 50%)",
          }}
        />
        <div className="relative z-[2] mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
              Made for Indian jewellers
            </p>
            <h1 className="animate-rise delay-1 font-display mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The gold standard in{" "}
              <span className="gold-shimmer-text">jewellery billing</span>
            </h1>
            <p className="animate-rise delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              GST-compliant offline software for gold shops. Accurate invoices,
              inventory, rates & reports — on one Windows laptop. No monthly
              cloud fee.
            </p>
            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/buy/">Buy licence · {SITE.price}</ButtonLink>
              <ButtonLink href={whatsappLink()} variant="ghost" external>
                WhatsApp {SITE.whatsapp}
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
              <li className="flex items-center gap-1.5">
                <Check size={14} className="text-gold-light" /> 100% Offline
              </li>
              <li className="flex items-center gap-1.5">
                <Check size={14} className="text-gold-light" /> GST Ready
              </li>
              <li className="flex items-center gap-1.5">
                <Check size={14} className="text-gold-light" /> Windows 10/11
              </li>
            </ul>
          </div>

          {/* Signature: foil tax-invoice card */}
          <div className="invoice-sheet animate-rise delay-2 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 overflow-hidden rounded-xl border border-gold/40 bg-black">
                  <BrandLogo height={48} className="h-12 w-12" />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold text-gold-light">
                    RiseGold
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Tax Invoice Preview
                  </p>
                </div>
              </div>
              <p className="font-mono text-xs text-white/50">INV-0126</p>
            </div>
            <div className="foil-line my-5" />
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70">
                <span>22K Ring · 4.800g</span>
                <span className="font-mono text-gold-light">₹47,462</span>
              </div>
              <div className="flex justify-between text-white/70">
                <span>22K Chain · 12.50g</span>
                <span className="font-mono text-gold-light">₹1,20,625</span>
              </div>
              <div className="foil-line my-2 opacity-60" />
              <div className="flex justify-between text-white/55">
                <span>CGST + SGST @ 3%</span>
                <span className="font-mono">₹5,010</span>
              </div>
              <div className="flex justify-between text-white/55">
                <span>Old gold exchange</span>
                <span className="font-mono">− ₹32,200</span>
              </div>
              <div className="mt-2 flex items-end justify-between border-t border-white/10 pt-4">
                <span className="text-xs uppercase tracking-[0.16em] text-white/45">
                  Net payable
                </span>
                <span className="font-mono text-2xl font-semibold text-paper">
                  ₹1,39,800
                </span>
              </div>
            </div>
            <p className="mt-6 text-center text-[11px] text-white/35">
              Auto-calculated · HSN 7113 · Print A4 PDF
            </p>
          </div>
        </div>
      </section>

      {/* Pain → solution */}
      <section className="border-b border-line bg-canvas-alt py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why shops switch"
            title="Paper chaos → clean GST bills"
            subtitle="Built for the way Indian jewellery counters actually work."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PAINS.map((p) => (
              <article
                key={p.problem}
                className="rounded-2xl border border-line bg-paper p-6"
              >
                <p className="text-sm text-muted line-through decoration-lotus/40">
                  {p.problem}
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-ink">
                  {p.solution}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Product"
            title="Everything a gold shop needs"
            subtitle="Billing, rates, stock, customers, reports — one desktop app."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <Link
                key={f.slug}
                href={`/features/#${f.slug}`}
                className="group rounded-2xl border border-line bg-paper p-5 transition hover:border-gold/50 hover:shadow-[0_20px_40px_-28px_rgba(184,149,74,0.45)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-lotus">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.short}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/features/" variant="outline">
              See all features
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ink-mid py-20 text-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            light
            eyebrow="Start today"
            title="Buy → Install → Bill"
            subtitle="Installer delivered after payment confirmation on WhatsApp."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-mono text-sm text-gold-light">{s.n}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/buy/">Get the installer</ButtonLink>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="border-y border-line bg-canvas-alt py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-4 sm:px-6">
          {[
            { icon: FileCheck, label: "GST compliant invoices" },
            { icon: Shield, label: "BIS hallmark fields" },
            { icon: HardDrive, label: "Local SQLite data" },
            { icon: Lock, label: "PIN-protected login" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-sm font-medium text-ink"
            >
              <Icon className="h-5 w-5 text-gold" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title={`${SITE.price} one-time`}
            subtitle={SITE.priceNote}
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/buy/">Buy on WhatsApp</ButtonLink>
            <ButtonLink href="/pricing/" variant="outline">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader eyebrow="FAQ" title="Before you buy" />
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-line bg-canvas px-5 py-4"
              >
                <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
                  <span className="flex items-center justify-between gap-3">
                    {f.q}
                    <span className="text-muted transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-dark py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-semibold text-paper sm:text-5xl">
            Ready to modernize your counter?
          </h2>
          <p className="mt-4 text-white/60">
            Message {SITE.whatsapp} — we send payment details and the installer
            link.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href={whatsappLink()} external>
              Open WhatsApp
            </ButtonLink>
            <ButtonLink href="/contact/" variant="ghost">
              Fill the form
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
