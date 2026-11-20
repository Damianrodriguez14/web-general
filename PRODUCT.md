# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript. Icons: `lucide-react`. Carousels: `embla-carousel-react`. Photos: `next/image`. Fonts via `next/font`. All copy, prices and links live in a single file, `content/sitio.ts`, so the owner can edit them without touching components. Per AGENTS.md, read `node_modules/next/dist/docs/` before writing Next code (APIs differ from older versions).

## Users

**Small businesses and independent professionals in Buenos Aires** who today run everything through Instagram and WhatsApp: shops, beauty studios, hair salons, lawyers, accountants, psychologists, HR consultants, teachers, etc. Manicuristas were the first niche and remain the first example, not the only audience. Most arrive from a phone (90%+), often after a TikTok or Instagram video. They are not technical and do not want to learn anything technical.

## Product Purpose

Damián builds websites for any business or professional: a page with what they do, their work or services, prices, location and a WhatsApp button. As an optional extra for those who work by appointment, a booking system where clients pick day and time on their own and pay the deposit (seña) through Mercado Pago.

This site sells that service. Its single goal: **the visitor writes to Damián on WhatsApp.** Every section leads there.

## Positioning

One person, local (Avellaneda, Buenos Aires), building simple pages for businesses and professionals. He handles everything: they send photos, info and prices, he shows a first version right away and delivers the finished page in a few days. Changes are welcome. Optional self-service booking with a Mercado Pago deposit going directly into their own account, for those who work with appointments (peluquerías, estética, consultorios, profes). No lock-in: cancel any time and the domain is transferred to their name.

## Operating Context

- The visitor arrives on a phone; attention is brief and they decide fast.
- Real pains: answering the same question (price, info, location) dozens of times a day, not showing up on Google, their work lost among posts.
- Conversation and closing happen on WhatsApp; Damián also has Instagram.

## Capabilities and Constraints

- Plans (ARS): **"Tu página"** $150.000 once + $15.000/month (what they do, work or services, prices, location, WhatsApp, Instagram, own domain). **"Tu página + turnos"** $280.000 once + $30.000/month (everything above + clients book day/time on their own + deposit via Mercado Pago + panel to see bookings), aimed at those who work with appointments; marked "El más elegido".
- Payment terms: half to start, half when they see it finished. Damián issues an invoice (factura).
- Delivery: never promise a fixed timeframe ("una semana", "7 días"). A first version the same day when there is room; finished in a few days.
- Monthly fee covers domain, hosting and maintenance.
- Live example (nails, fictional "Studio Mía" with sample data): https://landing-nails-mu.vercel.app. Other industries: "Más rubros · Muy pronto".
- WhatsApp number and Instagram URL are placeholders pending from the owner.

## Brand Commitments

- Name: **Damián**. Tagline: "Páginas web". Use "clientes", never "clientas".
- Voice: Argentine Spanish with voseo, simple, like talking to a friend. Nothing that sounds robotic or like an ad.
- Banned words: landing, landing page, web app, responsive, SEO, optimizado, solución, potenciá, impulsá, transformá, "llevá tu negocio al siguiente nivel", digital, emprendedor/a.
- Binding palette (set by owner): base cream #FAF7F2, cream 2 #F3ECE3, warm white #FFFDF9; text #1F1B18, warm gray #6B625B; main accent terracotta #C2704F (hover #A85C3E). Soft support colors for card and icon backgrounds: peach #F6DCCB, sage #DDE5D6, sand #EFE3CF. Warm dark #2A2420 for one or two contrast areas. WhatsApp green #25D366 **only** on WhatsApp buttons. No color gradients (not even Instagram's), no more than 2 colors besides the base per section, no strong terracotta as a large background.
- Binding type (set by owner): headings Newsreader (Fraunces was dropped: its "f" looked odd), body Inter. Caveat only for the hand-written signature.
- Feel: warm, close, hand-made and tidy, like someone you trust. Rounded corners 16–28px, soft warm shadows, little text (max two lines per paragraph on phones), something visual in every section, no forced "creative" layouts (diagonals, staircases).

## Evidence on Hand

- Live nails example site (URL above), with screenshots in `public/ejemplo-uñas.jpg` and `public/ejemplos/`. Its studio, reviews and numbers are sample data and must be labeled as such wherever shown.
- Optional portrait at `public/damian.jpg` (not provided yet).
- **No testimonials yet.** The opinions section exists but is hidden (`mostrarOpiniones = false`). Never invent reviews, client counts or results.

## Product Principles

1. **Everything leads to WhatsApp.** Every section ends one tap away from a conversation.
2. **Phone first, always.** Designed for a 375px screen held in one hand; desktop is the adaptation.
3. **Talk like a person.** Their words, their problems, voseo; no tech or marketing vocabulary.
4. **Real or nothing.** Only real examples, prices and terms; placeholders are marked, never faked.
5. **Low risk, said plainly.** Half up front, changes welcome, cancel any time, domain stays theirs.

## Accessibility & Inclusion

Mobile (375px): touch targets at least 48px tall, body text 16–17px, no horizontal overflow, and the floating WhatsApp button never covers another control. Desktop (768px+): body text at least 18px, buttons with 17px text and 56px height, page content up to ~1200px wide. Motion must never leave content invisible.
