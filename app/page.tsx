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
      <section className="grain relative overflow-hidden bg-ink-dark text-paper">
        <div className="hero-mesh pointer-events-none absolute inset-0 opacity-90" />
        <div className="gold-grid pointer-events-none absolute inset-0 opacity-25" />

        <div className="relative z-[2] mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
          <div>
            <p className="animate-rise flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-light" />
              Made for Indian jewellers
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-light" />
            </p>
            <h1 className="animate-rise delay-1 font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The gold standard in{" "}
              <span className="relative inline-block">
                <span className="gold-shimmer-text">jewellery billing</span>
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep" />
              </span>
            </h1>
            <p className="animate-rise delay-2 mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              GST-compliant offline software for gold shops. Try 30 days free
              on one Windows laptop — then a one-time Shop Licence. No monthly
              cloud fee.
            </p>
            <div className="animate-rise delay-3 mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/download/">
                Start 30-day trial
              </ButtonLink>
              <ButtonLink href="/buy/" variant="ghost">
                Buy licence · {SITE.price}
              </ButtonLink>
            </div>
            <ul className="animate-rise delay-4 mt-10 flex flex-wrap gap-3">
              {[
                "30-day free trial",
                "GST Ready",
                "Windows 10/11",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold-light"
                >
                  <Check size={14} className="text-gold-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="invoice-sheet gold-corners animate-rise delay-2 rounded-2xl p-7 sm:p-9">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-50" />
            <div className="relative">
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
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      <section className="relative overflow-hidden border-b border-line bg-canvas-alt py-24">
        <div className="gold-dots-bg pointer-events-none absolute inset-0 opacity-[0.07]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why shops switch"
            title="Paper chaos → clean GST bills"
            subtitle="Built for the way Indian jewellery counters actually work."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PAINS.map((p) => (
              <article
                key={p.problem}
                className="card-luxury group relative p-7"
              >
                <span className="absolute top-4 right-4 h-8 w-8 rounded-tr-xl border-t border-r border-gold/0 transition-all group-hover:border-gold/30" />
                <p className="text-sm text-muted line-through decoration-lotus/50 decoration-2">
                  {p.problem}
                </p>
                <p className="font-display mt-4 text-2xl leading-tight font-semibold text-ink">
                  {p.solution}
                </p>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-transform group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Product"
            title="Everything a gold shop needs"
            subtitle="Billing, rates, stock, customers, reports — one desktop app."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <Link
                key={f.slug}
                href={`/features/#${f.slug}`}
                className="card-luxury group relative block p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-deep transition-all group-hover:bg-gradient-to-br group-hover:from-gold-light group-hover:to-gold group-hover:text-ink-dark group-hover:shadow-lg group-hover:shadow-gold/30">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-ink transition-colors group-hover:text-gold-deep">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {f.short}
                </p>
                <span className="absolute right-6 bottom-6 text-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/features/" variant="outline">
              See all features
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-mid py-24 text-paper">
        <div className="gold-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            light
            eyebrow="Start today"
            title="Install → Bill → Activate"
            subtitle="Trial starts on first launch. Buy a Shop Licence when you are ready — we send an RGB1 key on WhatsApp."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/8"
              >
                <p className="font-mono inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-ink-dark">
                  {s.n}
                </p>
                <h3 className="font-display mt-5 text-2xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <ButtonLink href="/download/" variant="gold">
              Download the trial
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-canvas-alt py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 sm:px-6">
          {[
            { icon: FileCheck, label: "GST compliant invoices" },
            { icon: Shield, label: "BIS hallmark fields" },
            { icon: HardDrive, label: "Local SQLite data" },
            { icon: Lock, label: "PIN-protected login" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-gold/20 bg-gold-soft/30 px-5 py-3 text-sm font-medium text-ink transition-all hover:border-gold/40 hover:bg-gold-soft/50"
            >
              <Icon className="h-5 w-5 text-gold" />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeader
            eyebrow="Pricing"
            title={`${SITE.trialDays}-day trial, then ${SITE.price}`}
            subtitle={SITE.priceNote}
          />
          <div className="gold-rule mt-6" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/download/">Start free trial</ButtonLink>
            <ButtonLink href="/pricing/" variant="outline">
              Compare plans
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader eyebrow="FAQ" title="Trial, licence & keys" />
          <div className="mt-12 space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-line bg-canvas transition-all hover:border-gold/30 open:border-gold/40 open:shadow-lg open:shadow-gold/10"
              >
                <summary className="cursor-pointer list-none px-6 py-5 marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-medium text-ink">{f.q}</span>
                    <span className="relative h-5 w-5 shrink-0">
                      <span className="absolute top-1/2 left-0 h-0.5 w-5 bg-gold transition-transform group-open:rotate-45" />
                      <span className="absolute top-0 left-1/2 h-5 w-0.5 bg-gold transition-transform group-open:rotate-45 group-open:opacity-0" />
                    </span>
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <div className="foil-line mb-4" />
                  <p className="text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-dark py-20 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full border border-gold" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full border border-gold" />
        </div>
        <div className="relative mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl font-semibold text-paper sm:text-5xl lg:text-6xl">
            Ready to modernize your counter?
          </h2>
          <div className="gold-rule mt-6" />
          <p className="mt-6 text-lg text-white/60">
            Download the 30-day trial, or message {SITE.whatsapp} for a Shop
            Licence key and payment details.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/download/" variant="gold">
              Start free trial
            </ButtonLink>
            <ButtonLink href={whatsappLink()} external variant="ghost">
              Buy on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
