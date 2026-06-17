# La Cocina de Jeannie — Website

Next.js (App Router) + TypeScript + Tailwind. Catering-led site with a separate, brightly-themed food-truck zone.

## Run it

```bash
npm install
npm run dev
# http://localhost:3000
```

Build: `npm run build && npm start`.

## Design system

Two palettes, one site:

- **Catering (upscale):** ink `#1B1418`, vino `#732637`, gold `#C7A45A`, ivory `#F5EFE4`, sand `#EAE0CF`. Display font Fraunces, body Mulish.
- **Food truck (street):** flag-blue `#1A56C4`, flag-red `#E23046`, flag-yellow `#F6C544` on white. Same fonts, bolder weights.

Signature: bilingual pairing — English headline + a Spanish line in gold italic (`.es`), matching Jeannie's real voice.

Tokens live in `tailwind.config.ts`; shared classes (`.btn-gold`, `.eyebrow`, `.es`, `.photo-ph`) in `app/globals.css`.

## Pages

```
/                     Home (catering-led)
/wedding-catering     Flagship SEO/conversion page
/event-catering       Showers, birthdays, quinceañeras, corporate
/menus                Menu (placeholder structure)
/gallery              Photo grid (placeholder)
/about                Jeannie's bio
/quote                Inquiry form -> SMS flow
/truck                Food truck landing (bright zone)
/truck/where          Live status + schedule + map
/truck/menu           Street menu (placeholder)
/truck/book           Book-the-truck form
```

## Placeholders to swap

- **Logo:** `app/components/Logo.tsx` (catering) and the mark in `app/truck/layout.tsx` (truck).
- **Photos:** every `.photo-ph` block. Replace with `next/image`.
- **Copy marked PLACEHOLDER:** service model, pricing, minimums, rental policy, menus, testimonials, contact details (footer), service-area cities.
- **Truck schedule:** `app/truck/where/page.tsx` — wire to a Supabase `truck_schedule` table.

## Forms / lead flow (to build)

Both `/quote` and `/truck/book` currently show a confirmation on submit. To go live, POST to an `/api/leads` route that:

1. Inserts into Supabase `leads` (source: `wedding` | `event` | `truck`)
2. Sends an SMS to Jeannie
3. Sends a confirmation email to the customer

Same pattern as the RSA booking form.

## SEO notes

- Money keyword: "wedding catering North Georgia" + per-city variants.
- Separate intent-matched pages (wedding vs event vs truck), not one catch-all.
- Keep menus dated/seasonal; push for Google reviews early.
- Mobile-first; keep photo payloads light.
