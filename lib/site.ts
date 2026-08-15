/** RiseGold marketing site — shared config & content */

export const SITE = {
  name: "RiseGold",
  tagline: "Jewellery Billing Software",
  description:
    "GST-compliant offline billing software for Indian gold jewellery retailers. Create invoices, manage inventory, track customers — all on your laptop.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://risegold.in",
  whatsapp: "7054392173",
  whatsappE164: "917054392173",
  email: "support@risegold.in",
  /** Host the .exe on Vercel public/downloads or any CDN and set this env */
  downloadUrl:
    process.env.NEXT_PUBLIC_DOWNLOAD_URL || "/downloads/RiseGold-Setup.exe",
  price: "₹4,999",
  priceNote: "One-time licence · Lifetime updates for v1",
} as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ||
      `Hi RiseGold, I want to buy ${SITE.name} Billing Software. Please share payment details.`
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
    ],
  },
  {
    slug: "offline",
    title: "100% Offline",
    short:
      "No internet required. Data stays on your Windows laptop in a local SQLite file.",
    icon: "wifi",
    bullets: [
      "Works during network outages",
      "PIN-protected login",
      "One-click backup & restore",
      "No monthly cloud fees",
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
];

export const PRICING = {
  headline: "One licence. Your shop. Lifetime ownership.",
  plans: [
    {
      id: "licence",
      name: "Shop Licence",
      price: SITE.price,
      period: "one-time",
      featured: true,
      features: [
        "Full RiseGold desktop app (Windows)",
        "Unlimited invoices & customers",
        "GST invoices, inventory & reports",
        "Backup, PIN lock & WhatsApp share",
        "Installer link after purchase confirmation",
        "Setup help on WhatsApp",
      ],
      cta: "Buy on WhatsApp",
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
        "Restore help if laptop fails",
      ],
      cta: "Ask about support",
    },
  ],
};

export const FAQS = [
  {
    q: "How do I buy and get the installer?",
    a: "Message us on WhatsApp or submit the buy form. After payment confirmation, we send the Windows installer download link.",
  },
  {
    q: "Does it need internet?",
    a: "No. RiseGold runs fully offline on your laptop. Internet is only needed once to download the installer.",
  },
  {
    q: "Which computers are supported?",
    a: "Windows 10 or 11, 64-bit. About 200 MB free disk space.",
  },
  {
    q: "Is GST included in invoices?",
    a: "Yes. Tax invoices with GSTIN, HSN 7113, CGST 1.5% and SGST 1.5%, plus GST register export.",
  },
  {
    q: "Can I use it on multiple PCs?",
    a: "A shop licence is for one computer. Contact us on WhatsApp for extra licences.",
  },
  {
    q: "Is my shop data private?",
    a: "Yes. Everything stays in a local database on your PC. We never host your invoices.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Buy on WhatsApp",
    text: "Send your shop name. Pay. We confirm and share the installer link.",
  },
  {
    n: "02",
    title: "Install on Windows",
    text: "Run the setup, create your PIN, enter shop & GST details.",
  },
  {
    n: "03",
    title: "Bill from day one",
    text: "Set today’s gold rate and create your first GST invoice in minutes.",
  },
];

export const PAINS = [
  {
    problem: "Paper bills & calculator mistakes",
    solution: "Auto math for weight, making, wastage & GST",
  },
  {
    problem: "Cloud software needs net & monthly fees",
    solution: "One-time licence. Works offline forever",
  },
  {
    problem: "CA asks for clean GST data",
    solution: "GST register CSV + Excel sales reports",
  },
];
