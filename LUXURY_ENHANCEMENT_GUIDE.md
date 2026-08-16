# RiseGold Luxury Enhancement Guide

> A comprehensive, small-to-small detail blueprint to transform your gold jewellery billing software website into an ultra-luxurious digital experience befitting a premium gold brand.

---

## Table of Contents

1. [Current Theme Analysis](#current-theme-analysis)
2. [Color Palette Enhancements](#color-palette-enhancements)
3. [Typography Upgrades](#typography-upgrades)
4. [Global CSS Enhancements](#global-css-enhancements)
5. [Animation & Micro-interactions](#animation--micro-interactions)
6. [Component-by-Component Recommendations](#component-by-component-recommendations)
7. [Page-by-Page Recommendations](#page-by-page-recommendations)
8. [Visual Assets & Icons](#visual-assets--icons)
9. [Premium UI Patterns](#premium-ui-patterns)
10. [Performance Considerations](#performance-considerations)

---

## Current Theme Analysis

### What's Working Well (Keep These)

| Element | Current Implementation | Why It Works |
|---------|----------------------|--------------|
| Color palette | Gold (#b8954a), deep ink (#0a0706) | Classic gold-on-dark luxury aesthetic |
| Serif display font | Cormorant Garamond | Elegant, traditional jewellery feel |
| Foil line effect | Linear gradient gold dividers | Mimics real gold foil printing |
| Shimmer animation | Gold gradient text animation | Premium metallic effect |
| Invoice preview card | Dark with gold accents | Shows product context beautifully |
| Grain texture overlay | Subtle noise pattern | Adds tactile, paper-like quality |

### Areas Needing Enhancement

| Area | Current State | Luxury Gap |
|------|---------------|------------|
| Backgrounds | Flat colors | Lack depth, texture, gradient layers |
| Borders | Simple 1px lines | Need gold embossed/beveled effects |
| Shadows | Generic shadows | Should be gold-tinted, layered |
| Hover states | Basic color changes | Need smooth luxury transitions |
| Buttons | Solid colors | Missing metallic gradients, depth |
| Cards | Plain backgrounds | Need subtle patterns, gold borders |
| Icons | Basic Lucide icons | Could use gold-filled custom icons |
| Spacing | Consistent but tight | Luxury = more breathing room |

---

## Color Palette Enhancements

### Enhanced Gold Spectrum

Add these to `app/globals.css`:

```css
:root {
  /* Existing gold palette - KEEP */
  --gold: #b8954a;
  --gold-light: #d4b483;
  --gold-soft: #f3e9d4;
  --gold-deep: #7a5f2c;

  /* NEW: Extended gold spectrum for luxury depth */
  --gold-100: #fdf8ef;  /* Lightest cream */
  --gold-200: #f7ecd5;  /* Champagne tint */
  --gold-300: #e8d5a8;  /* Soft gold */
  --gold-400: #d4b97d;  /* Light metallic */
  --gold-500: #c9a855;  /* Primary gold */
  --gold-600: #b8954a;  /* Current gold */
  --gold-700: #9a7a3d;  /* Rich gold */
  --gold-800: #7a5f2c;  /* Deep gold */
  --gold-900: #5c4620;  /* Dark bronze */
  
  /* NEW: Rose gold variant for feminine appeal */
  --rose-gold: #b76e79;
  --rose-gold-light: #d4a5ab;
  --rose-gold-soft: #f5e6e8;

  /* NEW: Platinum/silver for contrast */
  --platinum: #e5e4e2;
  --platinum-dark: #a8a6a3;
  
  /* NEW: Precious gemstone accents */
  --ruby: #9b111e;
  --emerald: #046307;
  --sapphire: #0f52ba;
  
  /* NEW: Enhanced neutrals */
  --ivory: #fffff0;
  --cream: #fffdd0;
  --pearl: #f5f5f5;
  --charcoal: #36454f;
  
  /* NEW: Luxury gradient references */
  --gradient-gold: linear-gradient(135deg, #d4b483 0%, #b8954a 50%, #7a5f2c 100%);
  --gradient-gold-shimmer: linear-gradient(90deg, #7a5f2c, #d4b483, #b8954a, #f3e9d4, #b8954a, #7a5f2c);
  --gradient-gold-radial: radial-gradient(ellipse at center, #d4b483 0%, #b8954a 50%, #7a5f2c 100%);
}
```

### Dark Mode Gold (for dark sections)

```css
:root {
  /* Dark section enhancements */
  --ink-darkest: #050403;
  --ink-rich: #1a1512;
  --gold-on-dark: #d4b97d;  /* Brighter gold for dark backgrounds */
  --gold-glow: rgba(184, 149, 74, 0.15);  /* For gold glow effects */
}
```

---

## Typography Upgrades

### Current Fonts (Keep)
- **Display**: Cormorant Garamond (serif) - Perfect for luxury
- **Body**: DM Sans (sans-serif) - Clean readability
- **Mono**: JetBrains Mono - Technical elements

### Recommended Enhancements

#### 1. Add Font Weight Variations
In `app/layout.tsx`, expand weight options:

```tsx
const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],  // Add 300, 400 for delicate text
});
```

#### 2. Typography Scale Refinements

Add to `globals.css`:

```css
/* Luxury typography utilities */
.text-display-hero {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.text-display-xl {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.015em;
}

.text-display-lg {
  font-family: var(--font-display), Georgia, serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.15;
}

/* Elegant small caps for labels */
.text-label-luxury {
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 0.6875rem; /* 11px */
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

/* Refined body text */
.text-body-elegant {
  font-family: var(--font-body), system-ui, sans-serif;
  font-size: 1.0625rem; /* 17px */
  line-height: 1.75;
  letter-spacing: 0.01em;
}

/* Price display */
.text-price {
  font-family: var(--font-display), Georgia, serif;
  font-variant-numeric: tabular-nums;
}
```

#### 3. Text Selection Enhancement

Update selection color for gold theme:

```css
::selection {
  background: color-mix(in srgb, var(--gold) 35%, var(--cream));
  color: var(--ink-dark);
}
```

---

## Global CSS Enhancements

### 1. Enhanced Foil Line Effect

```css
.foil-line {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--gold-300) 15%,
    var(--gold-500) 35%,
    var(--gold-light) 50%,
    var(--gold-500) 65%,
    var(--gold-300) 85%,
    transparent 100%
  );
  position: relative;
}

/* Add sparkle effect on hover */
.foil-line::after {
  content: "";
  position: absolute;
  inset: -2px 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4) 50%,
    transparent
  );
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.foil-line:hover::after {
  transform: translateX(100%);
}
```

### 2. Luxury Card Styles

```css
/* Base luxury card */
.card-luxury {
  background: var(--paper);
  border: 1px solid color-mix(in srgb, var(--gold) 25%, transparent);
  border-radius: 1.25rem;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.8) inset,  /* Inner highlight */
    0 2px 4px rgba(122, 95, 44, 0.04),
    0 8px 16px rgba(122, 95, 44, 0.06),
    0 24px 48px rgba(122, 95, 44, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-luxury:hover {
  border-color: color-mix(in srgb, var(--gold) 50%, transparent);
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.8) inset,
    0 4px 8px rgba(184, 149, 74, 0.08),
    0 16px 32px rgba(184, 149, 74, 0.12),
    0 32px 64px rgba(184, 149, 74, 0.16);
  transform: translateY(-4px);
}

/* Gold-bordered card */
.card-gold-border {
  position: relative;
  background: var(--paper);
  border-radius: 1.25rem;
  overflow: hidden;
}

.card-gold-border::before {
  content: "";
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(
    135deg,
    var(--gold-light) 0%,
    var(--gold) 50%,
    var(--gold-deep) 100%
  );
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
}

/* Featured/premium card with gold glow */
.card-featured {
  position: relative;
  background: var(--paper);
  border: 2px solid var(--gold);
  border-radius: 1.25rem;
  box-shadow:
    0 0 0 1px rgba(184, 149, 74, 0.1),
    0 0 40px rgba(184, 149, 74, 0.15),
    0 20px 60px -20px rgba(184, 149, 74, 0.3);
}

/* Dark luxury card (for invoice preview) */
.card-dark-luxury {
  background: linear-gradient(
    180deg,
    rgba(26, 21, 18, 1) 0%,
    rgba(10, 7, 6, 1) 100%
  );
  border: 1px solid color-mix(in srgb, var(--gold) 40%, transparent);
  box-shadow:
    0 0 0 1px rgba(184, 149, 74, 0.08) inset,
    0 1px 0 0 rgba(212, 180, 131, 0.1) inset,
    0 40px 80px -30px rgba(0, 0, 0, 0.7),
    0 0 60px rgba(184, 149, 74, 0.08);
}
```

### 3. Luxury Button Styles

```css
/* Primary gold button with metallic effect */
.btn-gold-luxury {
  position: relative;
  background: linear-gradient(
    180deg,
    var(--gold-light) 0%,
    var(--gold) 50%,
    var(--gold-deep) 100%
  );
  color: var(--ink-dark);
  font-weight: 600;
  padding: 0.875rem 2rem;
  border-radius: 0.875rem;
  border: none;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.25) inset,
    0 -1px 0 0 rgba(0, 0, 0, 0.15) inset,
    0 4px 12px rgba(122, 95, 44, 0.25),
    0 8px 24px rgba(122, 95, 44, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-gold-luxury::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-gold-luxury:hover {
  transform: translateY(-2px);
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
    0 -1px 0 0 rgba(0, 0, 0, 0.15) inset,
    0 8px 20px rgba(122, 95, 44, 0.35),
    0 16px 40px rgba(122, 95, 44, 0.2);
}

.btn-gold-luxury:hover::before {
  left: 100%;
}

/* Ghost button with gold border */
.btn-ghost-gold {
  background: transparent;
  color: var(--gold);
  border: 1.5px solid var(--gold);
  padding: 0.75rem 1.75rem;
  border-radius: 0.875rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-ghost-gold::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  z-index: -1;
}

.btn-ghost-gold:hover {
  color: var(--ink-dark);
}

.btn-ghost-gold:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
```

### 4. Gold Shimmer Text (Enhanced)

```css
.gold-shimmer-text {
  background: linear-gradient(
    90deg,
    var(--gold-deep) 0%,
    var(--gold-light) 20%,
    var(--gold) 40%,
    var(--gold-100) 50%,
    var(--gold) 60%,
    var(--gold-light) 80%,
    var(--gold-deep) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: shimmer 4s linear infinite;
}

/* Static gold gradient text (no animation) */
.gold-gradient-text {
  background: linear-gradient(
    135deg,
    var(--gold-light) 0%,
    var(--gold) 50%,
    var(--gold-deep) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### 5. Decorative Gold Elements

```css
/* Gold corner ornaments */
.gold-corner {
  position: relative;
}

.gold-corner::before,
.gold-corner::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: var(--gold);
  border-style: solid;
  opacity: 0.4;
}

.gold-corner::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.gold-corner::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

/* Embossed gold divider */
.divider-embossed {
  height: 3px;
  background: linear-gradient(
    180deg,
    var(--gold-deep) 0%,
    var(--gold-light) 50%,
    var(--gold-deep) 100%
  );
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.15),
    0 -1px 0 rgba(255, 255, 255, 0.1) inset;
  border-radius: 2px;
}

/* Decorative gold dots pattern */
.gold-dots-bg {
  background-image: radial-gradient(
    var(--gold) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
  opacity: 0.08;
}
```

### 6. Enhanced Grain Texture

```css
.grain {
  position: relative;
}

.grain::before {
  content: "";
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  z-index: 1;
  mix-blend-mode: overlay;
}

/* Gold-tinted grain for light sections */
.grain-gold::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' fill='%23b8954a'/%3E%3C/svg%3E");
  opacity: 0.03;
}
```

---

## Animation & Micro-interactions

### 1. Enhanced Rise Animation

```css
@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-rise {
  animation: rise-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Staggered delays */
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.35s; }
.delay-4 { animation-delay: 0.5s; }
.delay-5 { animation-delay: 0.65s; }
```

### 2. Gold Glow Pulse (for CTAs)

```css
@keyframes gold-pulse {
  0%, 100% {
    box-shadow:
      0 0 0 0 rgba(184, 149, 74, 0.4),
      0 4px 12px rgba(122, 95, 44, 0.2);
  }
  50% {
    box-shadow:
      0 0 0 8px rgba(184, 149, 74, 0),
      0 8px 24px rgba(122, 95, 44, 0.3);
  }
}

.animate-gold-pulse {
  animation: gold-pulse 2.5s ease-in-out infinite;
}
```

### 3. Sparkle Effect

```css
@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--gold-light);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: sparkle 2s ease-in-out infinite;
}
```

### 4. Smooth Scroll Enhancement

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 5rem; /* Account for sticky navbar */
}

/* Scroll reveal base */
.scroll-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

### 5. Hover Transitions

```css
/* Smooth universal transitions */
a, button, input, textarea, select,
.card-luxury, .btn-gold-luxury, .btn-ghost-gold {
  transition-property: color, background-color, border-color, box-shadow, transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Link underline animation */
.link-luxury {
  position: relative;
  color: var(--gold);
  text-decoration: none;
}

.link-luxury::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.link-luxury:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

---

## Component-by-Component Recommendations

### 1. Navbar (`components/layout/Navbar.tsx`)

#### Current Issues:
- Basic border styling
- Simple hover states
- Logo container could be more premium

#### Enhancements:

```tsx
// Enhanced sticky navbar with glass effect and gold accent
<header className="sticky top-0 z-50 border-b border-gold/15 bg-canvas/80 backdrop-blur-xl backdrop-saturate-150">
  {/* Add thin gold line at top for luxury touch */}
  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
  
  <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
    {/* Enhanced logo container */}
    <Link href="/" className="group flex items-center gap-3">
      <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-gold/40 bg-gradient-to-br from-ink-dark to-ink-darkest shadow-lg">
        {/* Gold corner accent */}
        <span className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-gold/50 rounded-tl-lg" />
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

    {/* Enhanced nav links */}
    <nav className="hidden items-center gap-8 md:flex">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="link-luxury text-sm font-medium text-muted hover:text-ink"
        >
          {l.label}
        </Link>
      ))}
      
      {/* Premium CTA button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-xl bg-lotus px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-lotus/25 transition-all hover:shadow-xl hover:shadow-lotus/30"
      >
        <span className="relative z-10">WhatsApp · {SITE.whatsapp}</span>
        {/* Shine effect on hover */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </a>
    </nav>
  </div>
</header>
```

### 2. Footer (`components/layout/Footer.tsx`)

#### Current Issues:
- Missing decorative elements
- Basic link styling
- Could use gold accent patterns

#### Enhancements:

```tsx
<footer className="relative border-t border-gold/20 bg-ink-dark text-paper overflow-hidden">
  {/* Decorative gold pattern at top */}
  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gold/5 to-transparent" />
  
  {/* Subtle gold corner ornaments */}
  <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/20 rounded-tl-3xl" />
  <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-gold/20 rounded-tr-3xl" />
  
  <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
    {/* Brand column - enhanced */}
    <div>
      <div className="flex items-center gap-3">
        <span className="relative flex h-14 w-14 overflow-hidden rounded-xl border border-gold/40 bg-black shadow-lg shadow-gold/10">
          <BrandLogo height={56} className="h-14 w-14" />
          {/* Gold glow effect */}
          <span className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
        </span>
        <p className="font-display text-3xl font-semibold">
          Rise<span className="gold-shimmer-text">Gold</span>
        </p>
      </div>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
        Premium offline jewellery billing for Indian gold shops — GST invoices, 
        inventory, rates & reports.
      </p>
      
      {/* Trust badges */}
      <div className="mt-6 flex gap-4">
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

    {/* Links columns - enhanced hover */}
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
        Explore
      </p>
      <ul className="mt-5 space-y-3 text-sm">
        {['Features', 'Pricing', 'Buy licence', 'Download', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase().replace(' ', '-')}/`} 
                  className="group flex items-center text-white/70 transition hover:text-white">
              <span className="mr-2 h-px w-0 bg-gold transition-all group-hover:w-4" />
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact column */}
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
        Sales & Support
      </p>
      <div className="mt-5 space-y-4">
        {/* WhatsApp - premium card style */}
        <a href={whatsappLink()} 
           target="_blank"
           className="block rounded-xl border border-gold/20 bg-white/5 p-4 transition hover:border-gold/40 hover:bg-white/10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-light/70">WhatsApp</p>
          <p className="mt-1 font-mono text-xl text-gold-light">{SITE.whatsapp}</p>
        </a>
        
        <p className="text-sm text-white/60">
          Email: <a href={`mailto:${SITE.email}`} className="text-white/80 hover:text-white">{SITE.email}</a>
        </p>
      </div>
    </div>
  </div>

  {/* Bottom bar with gold accent */}
  <div className="relative border-t border-white/10">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/40 sm:px-6">
      © {new Date().getFullYear()} {SITE.name}. Crafted for jewellery retailers in India.
    </p>
  </div>
</footer>
```

### 3. ButtonLink (`components/shared/ButtonLink.tsx`)

#### Enhancements:

```tsx
const styles = {
  // Primary lotus with shine effect
  lotus:
    "relative overflow-hidden bg-gradient-to-b from-lotus to-lotus-hover text-white shadow-lg shadow-lotus/30 hover:shadow-xl hover:shadow-lotus/40 hover:-translate-y-0.5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-500 hover:after:translate-x-full",
  
  // Premium gold metallic
  gold:
    "relative overflow-hidden bg-gradient-to-b from-gold-light via-gold to-gold-deep text-ink-dark font-semibold shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/40 hover:-translate-y-0.5 after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:transition-transform after:duration-500 hover:after:translate-x-full",
  
  // Elegant outline with fill on hover
  outline:
    "relative border-2 border-gold/60 bg-transparent text-gold hover:border-gold hover:bg-gold/10 hover:text-gold-deep",
  
  // Ghost with subtle gold glow
  ghost:
    "relative bg-white/10 text-paper backdrop-blur-sm hover:bg-white/15 hover:shadow-lg hover:shadow-gold/10",
};
```

### 4. SectionHeader (`components/shared/SectionHeader.tsx`)

#### Enhancements:

```tsx
export function SectionHeader({ eyebrow, title, subtitle, light }: Props) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${light ? "text-paper" : ""}`}>
      {eyebrow && (
        <p className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-gold-light" : "text-lotus"
        }`}>
          {/* Decorative lines around eyebrow */}
          <span className={`h-px w-8 ${light ? 'bg-gold-light/40' : 'bg-lotus/40'}`} />
          {eyebrow}
          <span className={`h-px w-8 ${light ? 'bg-gold-light/40' : 'bg-lotus/40'}`} />
        </p>
      )}
      <h2 className={`font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] ${
        light ? "text-paper" : "text-ink"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${
          light ? "text-white/65" : "text-muted"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

### 5. FeatureIcon (`components/shared/FeatureIcon.tsx`)

#### Enhancements:

```tsx
export function FeatureIcon({
  name,
  className = "h-6 w-6",
  variant = "default"
}: {
  name: string;
  className?: string;
  variant?: "default" | "gold" | "outlined";
}) {
  const Icon = map[name] || Receipt;
  
  if (variant === "gold") {
    return (
      <div className="relative">
        <Icon className={`${className} text-gold drop-shadow-[0_2px_4px_rgba(184,149,74,0.3)]`} aria-hidden />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 blur-md bg-gold/20" />
      </div>
    );
  }
  
  return <Icon className={className} aria-hidden />;
}
```

### 6. LeadForm (`components/shared/LeadForm.tsx`)

#### Enhancements:

```tsx
// Enhanced form container
<form className="relative rounded-2xl border border-gold/25 bg-paper p-6 sm:p-8 shadow-xl shadow-gold/5">
  {/* Decorative gold corners */}
  <span className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-gold/40 rounded-tl-lg" />
  <span className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-gold/40 rounded-tr-lg" />
  <span className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-gold/40 rounded-bl-lg" />
  <span className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-gold/40 rounded-br-lg" />

  {/* Enhanced input styling */}
  <input
    className="w-full rounded-xl border-2 border-line bg-canvas/50 px-4 py-3 text-ink outline-none transition-all 
               focus:border-gold focus:bg-white focus:shadow-lg focus:shadow-gold/10
               placeholder:text-muted/60"
  />
  
  {/* Enhanced submit button */}
  <button
    type="submit"
    className="group relative mt-6 w-full overflow-hidden rounded-xl bg-gradient-to-b from-lotus to-lotus-hover px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-lotus/30 transition-all hover:shadow-xl hover:shadow-lotus/40 sm:w-auto"
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      Send on WhatsApp
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
  </button>
</form>
```

### 7. WhatsAppFloat (`components/shared/WhatsAppFloat.tsx`)

#### Enhancements:

```tsx
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#25D366]/40"
      aria-label={`WhatsApp ${SITE.whatsapp}`}
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      
      <MessageCircle size={22} className="relative z-10" />
      <span className="relative z-10 hidden sm:inline">Buy · {SITE.whatsapp}</span>
      
      {/* Gold accent dot */}
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold border-2 border-white animate-pulse" />
    </a>
  );
}
```

---

## Page-by-Page Recommendations

### 1. Homepage (`app/page.tsx`)

#### Hero Section Enhancements:

```tsx
{/* Enhanced hero with more dramatic gold accents */}
<section className="grain relative overflow-hidden bg-ink-dark text-paper">
  {/* Layered gradient backgrounds */}
  <div className="pointer-events-none absolute inset-0">
    {/* Primary gold glow */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-gold/15 via-gold/5 to-transparent translate-x-1/4 -translate-y-1/4" />
    {/* Secondary lotus accent */}
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-lotus/10 via-lotus/3 to-transparent -translate-x-1/4 translate-y-1/4" />
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.02]" 
         style={{ backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
  </div>

  <div className="relative z-[2] mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
    {/* Hero content */}
    <div>
      {/* Enhanced eyebrow with gold accents */}
      <p className="animate-rise flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-light" />
        Made for Indian Jewellers
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-light" />
      </p>
      
      <h1 className="animate-rise delay-1 font-display mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        The gold standard in{" "}
        <span className="relative">
          <span className="gold-shimmer-text">jewellery billing</span>
          {/* Decorative underline */}
          <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep rounded-full" />
        </span>
      </h1>
      
      {/* Enhanced feature badges */}
      <ul className="mt-10 flex flex-wrap gap-4">
        {[
          { icon: Check, text: "100% Offline" },
          { icon: Check, text: "GST Ready" },
          { icon: Check, text: "Windows 10/11" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold-light">
            <Icon size={14} className="text-gold-light" />
            {text}
          </li>
        ))}
      </ul>
    </div>

    {/* Enhanced invoice card */}
    <div className="card-dark-luxury animate-rise delay-2 rounded-2xl p-7 sm:p-9">
      {/* Gold border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 opacity-50" />
      
      {/* ... rest of invoice content with enhanced typography ... */}
    </div>
  </div>
  
  {/* Bottom gold line separator */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
</section>
```

#### Pain Points Section:

```tsx
{/* Enhanced pain → solution cards */}
<article className="group relative rounded-2xl border border-line bg-paper p-7 transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10">
  {/* Decorative corner */}
  <span className="absolute top-4 right-4 w-8 h-8 border-r border-t border-gold/0 transition-all group-hover:border-gold/30 rounded-tr-xl" />
  
  {/* Problem - strikethrough with lotus */}
  <p className="text-sm text-muted line-through decoration-lotus/50 decoration-2">
    {p.problem}
  </p>
  
  {/* Solution - emphasized */}
  <p className="mt-4 font-display text-2xl font-semibold text-ink leading-tight">
    {p.solution}
  </p>
  
  {/* Bottom gold accent on hover */}
  <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 transition-transform group-hover:scale-x-100" />
</article>
```

#### Features Section:

```tsx
{/* Enhanced feature cards with gold hover effects */}
<Link
  key={f.slug}
  href={`/features/#${f.slug}`}
  className="group relative rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-1"
>
  {/* Icon container with gold gradient on hover */}
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-deep transition-all group-hover:bg-gradient-to-br group-hover:from-gold-light group-hover:to-gold group-hover:text-ink-dark group-hover:shadow-lg group-hover:shadow-gold/30">
    <FeatureIcon name={f.icon} className="h-5 w-5" />
  </div>
  
  <h3 className="mt-5 font-display text-xl font-semibold text-ink group-hover:text-gold-deep transition-colors">
    {f.title}
  </h3>
  
  <p className="mt-2.5 text-sm leading-relaxed text-muted">
    {f.short}
  </p>
  
  {/* Arrow indicator on hover */}
  <span className="absolute bottom-6 right-6 text-gold opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
    →
  </span>
</Link>
```

#### How It Works Section (Dark):

```tsx
{/* Enhanced step cards */}
<div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-white/8">
  {/* Step number with gold gradient */}
  <p className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-ink-dark">
    {s.n.replace('0', '')}
  </p>
  
  <h3 className="font-display mt-5 text-2xl font-semibold">
    {s.title}
  </h3>
  
  <p className="mt-3 text-sm leading-relaxed text-white/60">
    {s.text}
  </p>
</div>
```

#### Compliance Bar:

```tsx
{/* Enhanced compliance badges */}
<div className="flex items-center gap-3 rounded-xl border border-gold/20 bg-gold-soft/30 px-5 py-3 transition-all hover:border-gold/40 hover:bg-gold-soft/50">
  <Icon className="h-5 w-5 text-gold" />
  <span className="text-sm font-medium text-ink">{label}</span>
</div>
```

#### FAQ Section:

```tsx
{/* Enhanced FAQ accordion */}
<details className="group rounded-xl border border-line bg-canvas transition-all hover:border-gold/30 [&[open]]:border-gold/40 [&[open]]:shadow-lg [&[open]]:shadow-gold/10">
  <summary className="cursor-pointer list-none px-6 py-5">
    <span className="flex items-center justify-between gap-4">
      <span className="font-medium text-ink">{f.q}</span>
      {/* Animated plus/cross icon */}
      <span className="relative h-5 w-5 shrink-0">
        <span className="absolute top-1/2 left-0 h-0.5 w-5 bg-gold transition-transform group-open:rotate-45" />
        <span className="absolute top-0 left-1/2 h-5 w-0.5 bg-gold transition-transform group-open:rotate-45 group-open:opacity-0" />
      </span>
    </span>
  </summary>
  <div className="px-6 pb-5">
    <div className="h-px bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30 mb-4" />
    <p className="text-sm leading-relaxed text-muted">{f.a}</p>
  </div>
</details>
```

#### Final CTA Section:

```tsx
{/* Enhanced CTA with gold ornaments */}
<section className="relative bg-ink-dark py-20 text-center overflow-hidden">
  {/* Decorative gold patterns */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-1/4 w-64 h-64 border border-gold rounded-full" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 border border-gold rounded-full" />
  </div>
  
  <div className="relative mx-auto max-w-2xl px-4">
    <h2 className="font-display text-4xl font-semibold text-paper sm:text-5xl lg:text-6xl">
      Ready to modernize your counter?
    </h2>
    
    {/* Gold decorative line */}
    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep" />
    
    <p className="mt-6 text-lg text-white/60">
      Message {SITE.whatsapp} — we send payment details and the installer link.
    </p>
    
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <ButtonLink href={whatsappLink()} external variant="gold">
        Open WhatsApp
      </ButtonLink>
      <ButtonLink href="/contact/" variant="ghost">
        Fill the form
      </ButtonLink>
    </div>
  </div>
</section>
```

### 2. Features Page (`app/features/page.tsx`)

#### Enhancements:

```tsx
{/* Enhanced feature article cards */}
<article className="group relative scroll-mt-24 rounded-2xl border border-line bg-paper p-7 sm:p-9 transition-all hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10">
  {/* Gold corner accents */}
  <span className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gold/0 transition-colors group-hover:border-gold/30 rounded-tl-2xl" />
  <span className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gold/0 transition-colors group-hover:border-gold/30 rounded-br-2xl" />

  <div className="flex flex-col gap-7 md:flex-row md:items-start">
    {/* Enhanced icon container */}
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lotus-soft to-lotus/10 text-lotus shadow-sm transition-all group-hover:shadow-lg group-hover:shadow-lotus/20">
      <FeatureIcon name={f.icon} className="h-7 w-7" />
    </div>
    
    <div className="flex-1">
      <h2 className="font-display text-3xl font-semibold text-ink">
        {f.title}
      </h2>
      
      {/* Gold decorative line under title */}
      <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-gold to-gold-light rounded-full" />
      
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">{f.short}</p>
      
      {/* Enhanced bullet list */}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {f.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-ink">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10">
              <Check className="h-3 w-3 text-success" aria-hidden />
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  </div>
</article>
```

### 3. Pricing Page (`app/pricing/page.tsx`)

#### Enhancements:

```tsx
{/* Featured plan with gold luxury styling */}
<article className={`relative rounded-2xl p-8 sm:p-10 ${
  plan.featured
    ? "border-2 border-gold bg-paper shadow-2xl shadow-gold/20"
    : "border border-line bg-canvas-alt"
}`}>
  {/* Featured badge */}
  {plan.featured && (
    <>
      {/* Gold glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-gold-light via-gold to-gold-deep opacity-20 blur-sm" />
      
      {/* Badge ribbon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep px-5 py-2 text-xs font-bold uppercase tracking-wider text-ink-dark shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-dark/30" />
          Most Popular
          <span className="h-1.5 w-1.5 rounded-full bg-ink-dark/30" />
        </span>
      </div>
    </>
  )}
  
  {/* Price display */}
  <div className="mt-6">
    <span className={`font-display text-5xl font-bold ${plan.featured ? 'gold-gradient-text' : 'text-ink'}`}>
      {plan.price}
    </span>
    <span className="ml-2 text-sm text-muted">{plan.period}</span>
  </div>
  
  {/* Feature list with gold bullets for featured */}
  <ul className="mt-8 space-y-4">
    {plan.features.map((f) => (
      <li key={f} className="flex gap-3 text-sm text-ink">
        <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? 'text-gold' : 'text-success'}`} />
        {f}
      </li>
    ))}
  </ul>
</article>
```

### 4. Buy Page (`app/buy/page.tsx`)

#### Enhancements:

```tsx
{/* Enhanced step indicators */}
<ol className="space-y-6">
  {steps.map((step, i) => (
    <li key={step} className="flex gap-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-sm font-bold text-ink-dark shadow-lg shadow-gold/30">
        {i + 1}
      </span>
      <div className="pt-2">
        <p className="font-medium text-ink">{step}</p>
        {/* Connecting line (except last) */}
        {i < steps.length - 1 && (
          <div className="mt-4 ml-[-25px] h-8 w-px bg-gradient-to-b from-gold to-gold/20" />
        )}
      </div>
    </li>
  ))}
</ol>

{/* Enhanced WhatsApp card */}
<a
  href={whatsappLink()}
  className="group mt-8 flex items-center gap-5 rounded-2xl border-2 border-[#25D366]/40 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 p-6 transition-all hover:border-[#25D366] hover:shadow-xl hover:shadow-[#25D366]/20"
>
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform group-hover:scale-110">
    <MessageCircle size={26} />
  </div>
  <div>
    <p className="font-semibold text-ink text-lg">Chat to buy now</p>
    <p className="font-mono text-2xl text-[#128C7E] font-bold">{SITE.whatsapp}</p>
  </div>
  <span className="ml-auto text-[#25D366] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
    →
  </span>
</a>
```

### 5. Download Page (`app/download/page.tsx`)

#### Enhancements:

```tsx
{/* Enhanced download button */}
<a
  href={SITE.downloadUrl}
  className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-b from-lotus to-lotus-hover px-6 py-5 text-base font-semibold text-white shadow-xl shadow-lotus/30 transition-all hover:shadow-2xl hover:shadow-lotus/40"
>
  <Download size={22} className="transition-transform group-hover:-translate-y-1" />
  <span>Download RiseGold Setup (.exe)</span>
  
  {/* Shine effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
</a>

{/* System requirements card */}
<div className="mt-10 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-soft/30 to-canvas-alt p-7">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
      <Monitor size={20} className="text-gold" />
    </div>
    <h2 className="font-display text-2xl font-semibold text-ink">
      System Requirements
    </h2>
  </div>
  
  <ul className="mt-5 space-y-3">
    {requirements.map((req) => (
      <li key={req} className="flex items-center gap-3 text-sm text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {req}
      </li>
    ))}
  </ul>
</div>
```

### 6. Contact Page (`app/contact/page.tsx`)

#### Enhancements:

```tsx
{/* Enhanced contact card */}
<div className="rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-paper to-gold-soft/20 p-8 shadow-xl shadow-gold/10">
  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-deep">
    WhatsApp Sales
  </p>
  
  {/* Large phone number with gold gradient */}
  <p className="font-mono mt-3 text-4xl font-bold gold-gradient-text">
    {SITE.whatsapp}
  </p>
  
  {/* Decorative gold line */}
  <div className="my-5 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
  
  <ButtonLink href={whatsappLink()} external variant="gold" className="w-full">
    Open WhatsApp Chat
  </ButtonLink>
</div>
```

### 7. About Page (`app/about/page.tsx`)

#### Enhancements:

```tsx
{/* Enhanced about content */}
<div className="relative mt-12 space-y-6 text-base leading-relaxed text-muted">
  {/* Opening quote with gold styling */}
  <blockquote className="relative pl-6 border-l-4 border-gold italic text-lg text-ink">
    <span className="absolute -top-4 -left-2 text-6xl text-gold/20 font-display">"</span>
    Billing that respects the shop floor
  </blockquote>

  <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
    RiseGold is a Windows desktop app for single-shop gold jewellery retailers...
  </p>
  
  {/* Mission statement card */}
  <div className="mt-10 rounded-2xl border border-gold/30 bg-gradient-to-r from-gold-soft/50 to-canvas p-8">
    <p className="text-xs font-bold uppercase tracking-widest text-gold-deep mb-3">Our Mission</p>
    <p className="font-display text-2xl font-semibold text-ink leading-snug">
      Make jewellery billing simple, accurate, and owned by the shop — not locked behind a subscription.
    </p>
  </div>
</div>
```

---

## Visual Assets & Icons

### 1. Custom Gold Icons (Recommendations)

Replace basic Lucide icons with custom gold-styled versions:

- **Receipt icon**: Add gold foil stamp effect
- **Users icon**: Use traditional namaste/greeting gesture
- **Package icon**: Jewellery box with gold clasp
- **Trending icon**: Gold bars chart
- **Chart icon**: Traditional ledger book style
- **Wifi icon**: Data security shield

### 2. Background Patterns (Add to CSS)

```css
/* Luxury patterns for section backgrounds */
.pattern-damask {
  background-image: url("data:image/svg+xml,..."); /* Damask pattern */
  background-size: 120px 120px;
  opacity: 0.03;
}

.pattern-paisley {
  background-image: url("data:image/svg+xml,..."); /* Paisley - Indian motif */
  opacity: 0.04;
}

.pattern-mandala {
  background-image: url("data:image/svg+xml,..."); /* Subtle mandala */
  opacity: 0.02;
}
```

### 3. Logo Enhancement

Create a more luxurious logo variant:
- Add gold gradient fill
- Include subtle emboss effect
- Create animated version for loading states

---

## Premium UI Patterns

### 1. Loading States

```css
/* Gold loading spinner */
@keyframes gold-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader-gold {
  width: 48px;
  height: 48px;
  border: 3px solid var(--gold-soft);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: gold-spin 1s linear infinite;
}

/* Skeleton loading with gold shimmer */
.skeleton-gold {
  background: linear-gradient(
    90deg,
    var(--gold-soft) 25%,
    var(--gold-light) 50%,
    var(--gold-soft) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### 2. Scroll Progress Indicator

```tsx
// Add gold scroll progress bar at top of page
<div className="fixed top-0 left-0 right-0 h-1 z-[100]">
  <div 
    className="h-full bg-gradient-to-r from-gold-deep via-gold-light to-gold"
    style={{ width: `${scrollProgress}%` }}
  />
</div>
```

### 3. Tooltip Styling

```css
.tooltip-gold {
  background: var(--ink-dark);
  color: var(--paper);
  border: 1px solid var(--gold);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--gold);
}
```

### 4. Form Validation States

```css
/* Success state */
.input-success {
  border-color: var(--success);
  box-shadow: 0 0 0 3px rgba(14, 138, 95, 0.15);
}

/* Error state */
.input-error {
  border-color: var(--lotus);
  box-shadow: 0 0 0 3px rgba(246, 36, 119, 0.15);
}
```

### 5. Number Counter Animation

```tsx
// Animated price display for impact
<span className="font-mono text-5xl font-bold gold-gradient-text tabular-nums">
  ₹{animatedPrice.toLocaleString('en-IN')}
</span>
```

---

## Performance Considerations

### 1. Critical CSS

Extract critical above-the-fold CSS for:
- Hero section gold gradients
- Navbar styling
- Primary button styles

### 2. Font Loading Strategy

```tsx
// Preload critical fonts
<link
  rel="preload"
  href="/fonts/cormorant-garamond-v16-latin-600.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### 3. Animation Performance

```css
/* Use GPU-accelerated properties */
.animate-rise {
  will-change: transform, opacity;
}

.gold-shimmer-text {
  will-change: background-position;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4. Image Optimization

- Use WebP format for any new images
- Implement blur placeholder for logo
- Consider SVG for decorative patterns

---

## Implementation Priority

### Phase 1: Quick Wins (1-2 days)
1. ✅ Update color palette in `globals.css`
2. ✅ Add luxury button styles
3. ✅ Enhance card hover effects
4. ✅ Improve foil line dividers
5. ✅ Add gold corner decorations

### Phase 2: Component Polish (2-3 days)
1. ✅ Navbar gold accent line
2. ✅ Footer ornamental elements
3. ✅ Enhanced form styling
4. ✅ Improved section headers

### Phase 3: Page-by-Page (3-5 days)
1. ✅ Hero section dramatic overhaul
2. ✅ Features page luxury cards
3. ✅ Pricing page featured plan
4. ✅ Buy page step indicators
5. ✅ Download page premium styling

### Phase 4: Polish & Performance (1-2 days)
1. ✅ Scroll animations
2. ✅ Loading states
3. ✅ Performance optimization
4. ✅ Accessibility review

---

## Summary

This guide provides a complete blueprint to transform the RiseGold website into an ultra-luxurious experience while respecting the existing theme. Key principles:

1. **Gold is King**: Every enhancement uses gold as the primary accent
2. **Subtle Elegance**: Avoid garish effects; luxury is understated
3. **Tactile Quality**: Add depth through shadows, gradients, textures
4. **Smooth Interactions**: Every hover and transition should feel premium
5. **Cultural Resonance**: Honor Indian jewellery aesthetic traditions
6. **Performance First**: Luxury shouldn't slow down the experience

Implement these changes progressively, testing each enhancement to ensure it aligns with the premium brand positioning of RiseGold as the trusted gold billing software for Indian jewellers.
