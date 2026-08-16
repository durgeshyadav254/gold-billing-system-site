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

Preferred: upload a **code-signed** Setup.exe to GCS, then point the site at that URL.

From the desktop app repo (`gold-billing-system`):

```powershell
$env:CSC_LINK = "D:\certs\risegold-codesign.pfx"
$env:CSC_KEY_PASSWORD = "your-pfx-password"
npm run package:release -- --upload
```

Bucket: `gs://rise-gold-billing-installer/`  
Public URL is set in `lib/site.ts` → `SITE.downloadUrl` (or `NEXT_PUBLIC_DOWNLOAD_URL`).

Local/static alternative:

1. Copy your built installer to `public/downloads/RiseGold-Setup.exe`
2. Or set:

```bash
NEXT_PUBLIC_DOWNLOAD_URL=https://your-cdn.com/RiseGold-Setup.exe
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Buyers who have not paid yet are guided to WhatsApp. After payment you send them the download link (or unlock the public `/download/` page).

If Windows shows SmartScreen (“protected your PC”), customers use **More info → Run anyway**. That warning is SmartScreen reputation, not Vercel/GCS. Signing the `.exe` before upload is the real fix.

## Sales flow

1. Customer opens **/buy/** or floating WhatsApp button.
2. They chat on WhatsApp (`wa.me/917054392173`) or submit the form (pre-filled WhatsApp message).
3. You share UPI/bank details → confirm payment → send installer URL.

## Build (static export → `out/`)

```bash
npm run build
```

## Deploy on Vercel

This project uses **static export**. In Vercel project settings:

| Setting | Value |
|--------|--------|
| Framework Preset | **Other** (not Next.js) |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Install Command | `npm install` |

`vercel.json` already sets `framework: null` and `outputDirectory: out`.

Optional env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_DOWNLOAD_URL`

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
