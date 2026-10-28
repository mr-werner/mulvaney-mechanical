# Mulvaney Mechanical — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.mulvaneymechanical.com/ (Mulvaney Mechanical, Inc., Danbury, CT).
Preview: https://mmi.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `mulvaney-mechanical` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `mmi.blueprintwebstudio.com` is a CNAME at Porkbun.
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-02), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the request form (`api/contact.js`; demo mode without them).

## Design
- Logo: their original "MM / Mulvaney Mechanical, Inc. / Your Single Source Solution" logo on a white header.
- Palette from the original: logo blue #0f4f8d and the red of their "24 Hour Service" line, with navy, steel greys, and the standard ASME pipe-marker colors as accents.
- Fonts: Saira Condensed (headings), Work Sans (body).
- Motif: ASME-style pipe identification markers (colored band + flow arrow) as section labels, a steel pipe divider with flanges, and the trade licenses shown as brass equipment tags.
- Hero uses their own pump-room photo; the mosaic, clean-room and team photos are all from the current site.
- Section order: top bar (24-hour service) → header → hero with gauges → services (six trades) → work mosaic → clean rooms → licenses → testimonials → team, awards and leadership → request form and office → footer.

## What changed from the current site
- © 2017 footer and a "We Have A Billboard for lease on Interstate 84" ad with a cartoon on every page; removed.
- Sixteen thin pages (each service, team, licenses, awards, affiliations, community, testimonials) condensed into one scroll that keeps all of the content.
- The 24-hour service number is now a tap-to-call button on every screen.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm
- Which team photo is George and which is Charlie (the current team page lists George, Charlie, Mark, Janette in that order; the concept follows it).
- Whether all license numbers are current, and whether they should be public.
- "5 states & D.C." reads the licenses page (CT, NY, NJ, FL, DC); adjust the stat if wanted.
- Testimonials are quoted word for word from the current site's Testimonials page; no Google rating is shown.
- The (845) 278-8813 number on the service van isn't used anywhere; add it if it's a NY line.
- Mulvaney Properties and the newsletter link were left out; add back if wanted.
