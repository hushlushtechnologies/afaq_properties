# Afaq Al Manzil Properties — Website

A premium, luxury real estate website for Afaq Al Manzil Properties, a UAE-focused property consultancy based in Dubai. Built with Next.js, TypeScript, and Tailwind CSS.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod (validation) + EmailJS (delivery)
- **Fonts:** Lora (headings), Public Sans (body) — via `next/font`
- **Hosting:** Vercel
- **Domain:** GoDaddy (DNS pointed at Vercel)

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

## Project Structure

```
src/
├── app/                    # Next.js App Router — one folder per route
│   ├── layout.tsx          # Root layout (Navbar, Footer, WhatsApp bar, analytics)
│   ├── page.tsx             # Homepage
│   ├── properties/          # /properties
│   ├── off-plan/             # /off-plan
│   ├── ready-properties/     # /ready-properties
│   ├── rental-properties/    # /rental-properties
│   ├── about-us/, services/, careers/, contact-us/, enquiry-now/
│   ├── privacy-policy/, terms-conditions/
│   ├── not-found.tsx        # Custom 404 page
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   └── robots.ts            # Auto-generated robots.txt
│
├── components/
│   ├── layout/              # Navbar, Footer, Section, WhatsAppFloatingBar
│   ├── sections/             # Page-specific sections (Hero variants, PropertyCard, forms, etc.)
│   ├── ui/                  # Reusable primitives (Button, Input, SelectDropdown, Modal, etc.)
│   └── animations/           # Reveal, ParallaxImage
│
├── data/                    # Content files (hero copy, FAQ content, page-specific text)
├── lib/                     # Business logic — property filtering, formatting, SEO helpers
│   └── validation/          # Zod schemas for each form
├── types/                   # TypeScript interfaces
├── config/                  # Single-source-of-truth constants (WhatsApp number, footer links, nav)
└── context/                 # React Context providers (BrochureModalProvider)
```

---

## Key Architectural Patterns

- **Reusable property listing engine:** `PropertiesListing` powers `/properties`, `/off-plan`, `/ready-properties`, and `/rental-properties` — the only difference between pages is a `fixedStatus` prop. No duplicated filter logic.
- **Single sources of truth:** WhatsApp number (`config/whatsapp.ts`), contact details (`config/footer.ts`), navigation links (`config/navigation.ts`) — update once, reflected everywhere.
- **Property status labels:** the internal value `"completed"` displays as **"Ready Properties"** sitewide — this is intentional (see `lib/properties.ts` → `getStatusLabel`).
- **Global brochure modal:** one modal instance (via `BrochureModalProvider`), triggered from any property card anywhere on the site — not a modal per card.
- **Form architecture:** every form uses React Hook Form + Zod for validation, then EmailJS for delivery. See `lib/email.ts` for the three separate EmailJS templates (Contact, Enquiry, Brochure).

---

## Deployment

Hosted on **Vercel**, connected to the `main` branch — every push to `main` auto-deploys.

Domain (`afaqalmanzilproperties.com`, via GoDaddy) is connected via DNS records (A record + CNAME) pointing at Vercel, rather than a full nameserver switch — this was deliberate, to avoid disrupting any existing email service on the domain.

---

## Useful Commands

```bash
npm run dev      # Start local dev server
npm run build    # Production build (run before every push to main)
npm run start    # Run the production build locally
npm run lint     # ESLint check
```
