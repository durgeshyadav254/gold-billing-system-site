# RiseGold Marketing Site

Static Next.js 15 website for selling **RiseGold** jewellery billing software.

- Folder: `gold-billing-system-site`
- Deploy: **Vercel** (static export)
- Sales: WhatsApp **7054392173** + lead forms that open WhatsApp

## Local development

```bash
cd gold-billing-system-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Host the Windows installer

1. Copy your built installer to:

   `public/downloads/RiseGold-Setup.exe`

2. Or host the file on Google Drive / Cloudflare R2 / S3 and set:

```bash
NEXT_PUBLIC_DOWNLOAD_URL=https://your-cdn.com/RiseGold-Setup.exe
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Buyers who have not paid yet are guided to WhatsApp. After payment you send them the download link (or unlock the public `/download/` page).

## Sales flow

1. Customer opens **/buy/** or floating WhatsApp button.
2. They chat on WhatsApp (`wa.me/917054392173`) or submit the form (pre-filled WhatsApp message).
3. You share UPI/bank details → confirm payment → send installer URL.

## Build

```bash
npm run build
npm start
```

Pages are statically generated (SSG). Deploy with the **Next.js** preset on Vercel — do **not** set Output Directory to `out`.

## Deploy on Vercel

1. Push to GitHub and import the project.
2. Framework: **Next.js** (auto)
3. Build Command: `npm run build` (default)
4. Output Directory: **leave empty** (default `.next`) — clear it if it was set to `out`
5. Optional env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_DOWNLOAD_URL`

Or CLI:

```bash
npx vercel
```

## Pages

| Path | Purpose |
|------|---------|
| `/` | Luxury homepage + product pitch |
| `/features` | All product features |
| `/pricing` | Licence + support pricing |
| `/buy` | WhatsApp buy + form |
| `/download` | Installer download + requirements |
| `/contact` | Sales contact form |
| `/about` | About RiseGold |
| `/privacy` `/terms` | Legal |

## Change price / WhatsApp

Edit `lib/site.ts` — `SITE.whatsapp`, `SITE.price`, etc.
