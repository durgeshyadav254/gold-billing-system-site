/** RiseGold marketing site — shared config & content */

export const SITE = {
  name: "RiseGold",
  tagline: "Jewellery Billing Software",
  description:
    "GST-compliant offline billing software for Indian gold jewellery retailers. Try 30 days free, then a one-time Shop Licence. Optional Cloud Protect and Priority Support.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://risegold.in",
  whatsapp: "7054392173",
  whatsappE164: "917054392173",
  email: "support@risegold.in",
  downloadUrl:
    "https://storage.googleapis.com/rise-gold-billing-installer/Rise%20Gold%20Billing-Setup-1.0.0.exe",
  price: "₹4,999",
  priceNote: "Shop Licence · one-time · lifetime updates for v1",
  trialDays: 30,
  licenseKeyPrefix: "RGB1",
  installer: {
    version: "1.0.0",
    edition: "Shop licence + 30-day trial",
    platform: "Windows 10 / 11",
    arch: "64-bit",
    filename: "Rise Gold Billing-Setup-1.0.0.exe",
    released: "August 2026",
  },
} as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ||
      `Hi RiseGold, I want to buy ${SITE.name} Shop Licence (${SITE.price}). Please share UPI details.`
  );
  return `https://wa.me/${SITE.whatsappE164}?text=${text}`;
}

export type Feature = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  bullets: string[];
};

export const FEATURES: Feature[] = [
  {
    slug: "billing",
    title: "GST Tax Invoices",
    short:
      "Create accurate gold invoices in minutes — weights, making, wastage, CGST/SGST auto-calculated.",
    icon: "receipt",
    bullets: [
      "Multi-item bills with purity & net weight",
      "Making charges: per gram, %, or fixed",
      "CGST 1.5% + SGST 1.5% (HSN 7113)",
      "Old gold exchange deduction on the same bill",
      "A4 print & PDF save",
      "Split payments: cash, UPI, card, bank",
    ],
  },
  {
    slug: "customers",
    title: "Customer CRM",
    short:
      "Search by name or mobile. Full purchase history and lifetime spend per customer.",
    icon: "users",
    bullets: [
      "PAN, GSTIN, Aadhaar fields for compliance",
      "Quick-add during billing",
      "Buyer PAN reminder on bills ≥ ₹2,00,000",
      "Soft-delete keeps history safe",
    ],
  },
  {
    slug: "inventory",
    title: "Inventory & Barcode",
    short:
      "Track every piece — categories, weights, hallmark, barcode scan into the bill.",
    icon: "package",
    bullets: [
      "PUID / barcode generation",
      "Gold & silver stock summary",
      "Stock movements ledger",
      "CSV stock register export",
    ],
  },
  {
    slug: "rates",
    title: "Daily Metal Rates",
    short:
      "Set 24K once — auto-fill 22K, 20K, 18K, 14K. Silver, platinum & palladium too.",
    icon: "trending",
    bullets: [
      "Auto-calc lower purities from 24K",
      "Rate history by date",
      "Auto-fills every new invoice",
    ],
  },
  {
    slug: "reports",
    title: "Reports & GST Register",
    short:
      "Daily, monthly, customer-wise reports. Export Excel & GST CSV for your CA.",
    icon: "chart",
    bullets: [
      "Payment mode breakdown",
      "Month chart with day-wise totals",
      "GST register for filing",
      "Excel (.xlsx) export",
      "Activity / audit log",
    ],
  },
  {
    slug: "offline",
    title: "100% Offline",
    short:
      "No internet required for billing. Data stays on your Windows laptop in a local SQLite file.",
    icon: "wifi",
    bullets: [
      "Works during network outages",
      "PIN-protected login",
      "One-click local backup & restore",
      "Internet only needed for Cloud Protect",
    ],
  },
  {
    slug: "old-gold",
    title: "Old Gold Exchange",
    short:
      "Buy-back weight, purity & rate on the invoice — deducted from net payable.",
    icon: "exchange",
    bullets: [
      "Metal purchase bills (PUR/FY/n)",
      "Quality & hallmark notes",
      "Payment tracking",
    ],
  },
  {
    slug: "whatsapp",
    title: "WhatsApp Share",
    short:
      "Send invoice summary to the customer in one click after billing.",
    icon: "message",
    bullets: [
      "Pre-formatted message",
      "Invoice number & totals",
      "Share via WhatsApp Desktop",
    ],
  },
  {
    slug: "calculator",
    title: "Price Calculator",
    short:
      "Quote a piece before billing — weight, making, wastage and GST on one screen.",
    icon: "calculator",
    bullets: [
      "Same math as the tax invoice",
      "Useful at the counter for walk-in quotes",
    ],
  },
  {
    slug: "cloud-protect",
    title: "Cloud Protect",
    short:
      "Optional yearly add-on: encrypted online backups when the PC is online. Not in the free trial.",
    icon: "cloud",
    bullets: [
      "Automatic encrypted backups when online",
      "Restore to a new PC with the same licence + passphrase",
      "Activate with a Shop Licence key that includes Cloud Protect",
      "Sold separately — ask on WhatsApp for yearly price",
    ],
  },
];

export type Plan = {
  id: "trial" | "licence" | "cloud" | "support";
  name: string;
  price: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
  href: string;
  external?: boolean;
  variant: "gold" | "lotus" | "outline";
};

export const PRICING = {
  headline: "Try 30 days. Then own the shop licence.",
  plans: [
    {
      id: "trial",
      name: "Free trial",
      price: "₹0",
      period: "30 days",
      featured: false,
      features: [
        "Starts automatically on first install — no key",
        "Full billing, inventory, GST invoices & reports",
        "Local backup & restore",
        "Save & print bills during the trial",
        "Cloud Protect is not included",
        "After 30 days, paste a Shop Licence key to continue",
      ],
      cta: "Download trial",
      href: "/download/",
      variant: "outline",
    },
    {
      id: "licence",
      name: "Shop Licence",
      price: SITE.price,
      period: "one-time",
      featured: true,
      badge: "Most popular",
      features: [
        "Full RiseGold desktop app (Windows)",
        "Unlimited invoices & customers",
        "GST invoices, inventory & reports",
        "Local backup, PIN lock & WhatsApp share",
        "One computer per licence",
        "Installer + RGB1 licence key after payment",
      ],
      cta: "Buy on WhatsApp",
      href: "/buy/",
      variant: "gold",
    },
    {
      id: "cloud",
      name: "Cloud Protect",
      price: "Ask",
      period: "/ year add-on",
      featured: false,
      features: [
        "Encrypted online backups when the PC is online",
        "Restore shop data to a new laptop",
        "Added on the same Shop Licence key",
        "Not included in the free trial",
        "Renew yearly via WhatsApp",
      ],
      cta: "Ask about Cloud Protect",
      href: whatsappLink(
        `Hi RiseGold, I want Cloud Protect (yearly add-on) for ${SITE.name}.`
      ),
      external: true,
      variant: "outline",
    },
    {
      id: "support",
      name: "Priority Support",
      price: "₹999",
      period: "/ year (optional)",
      featured: false,
      features: [
        "Remote setup assistance",
        "Priority WhatsApp replies",
        "Billing & GST tips for your shop",
        "Restore help if the laptop fails",
        "No extra app key — we note your shop name",
      ],
      cta: "Ask about support",
      href: whatsappLink(
        `Hi RiseGold, I want Priority Support (₹999/year) for ${SITE.name}.`
      ),
      external: true,
      variant: "outline",
    },
  ] satisfies Plan[],
};

export const FAQS = [
  {
    q: "Can I try before I buy?",
    a: "Yes. Download the installer — a free 30-day trial starts automatically on first launch. No licence key. Billing, GST invoices and local backup work during the trial. Cloud Protect is not included.",
  },
  {
    q: "How do I buy and activate?",
    a: "Message us on WhatsApp or submit the buy form. After UPI payment we send the installer link and an RGB1 Shop Licence key. Paste the key under Settings → License (or when you Save a bill).",
  },
  {
    q: "What happens when the trial ends?",
    a: "You can still open the app and view data, but Save / Print bills are blocked until you paste a paid Shop Licence key.",
  },
  {
    q: "Does it need internet?",
    a: "No for billing. RiseGold runs offline on your laptop. Internet is needed to download the installer, and later if you subscribe to Cloud Protect backups.",
  },
  {
    q: "Which computers are supported?",
    a: "Windows 10 or 11, 64-bit. About 200 MB free disk space. One Shop Licence is for one computer.",
  },
  {
    q: "Windows says “protected your PC” — is the download unsafe?",
    a: "That is Microsoft Defender SmartScreen for new or rarely downloaded apps, not a virus. Click More info → Run anyway. Signed builds show our verified publisher name instead of Unknown publisher.",
  },
  {
    q: "Is GST included in invoices?",
    a: "Yes. Tax invoices with GSTIN, HSN 7113, CGST 1.5% and SGST 1.5%, plus GST register CSV for your CA. E-invoicing is not included.",
  },
  {
    q: "What is Cloud Protect?",
    a: "An optional yearly add-on on the same Shop Licence. When the PC is online, RiseGold can upload encrypted backups so you can restore to a new laptop. It is not in the free trial. Ask on WhatsApp for the yearly price.",
  },
  {
    q: "Can I use it on multiple PCs?",
    a: "A Shop Licence is for one computer. Contact us on WhatsApp for extra licences.",
  },
  {
    q: "Is my shop data private?",
    a: "Yes. Invoices stay in a local database on your PC. We never host them unless you add Cloud Protect, which stores encrypted backups you control with a recovery passphrase.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Install the trial",
    text: "Download the Windows setup. A 30-day trial starts on first launch — no key.",
  },
  {
    n: "02",
    title: "Bill from day one",
    text: "Create your PIN, set today’s gold rate, and print GST invoices.",
  },
  {
    n: "03",
    title: "Buy when ready",
    text: "Pay on WhatsApp. We send an RGB1 key — paste it under Settings → License.",
  },
];

export const PAINS = [
  {
    problem: "Paper bills & calculator mistakes",
    solution: "Auto math for weight, making, wastage & GST",
  },
  {
    problem: "Cloud software needs net & monthly fees",
    solution: "30-day trial, then one-time Shop Licence",
  },
  {
    problem: "CA asks for clean GST data",
    solution: "GST register CSV + Excel sales reports",
  },
];
