# Kuwait Premium Group Website Foundation

## Purpose

Create a bilingual, Kuwait-focused marketing website for Kuwait Premium Group (KPG), covering interiors, fitout, construction, MEP, joinery, project management, and refurbishment. The design takes structural inspiration from the supplied reference while using KPG branding, Kuwait-specific original copy, and assets approved by KPG.

## Brand Direction

- Logo: `Logo.jpg`
- Primary: charcoal `#30302f`
- Accent: KPG gold `#f5cf11`
- Surface: warm white `#f6f6f6`
- Tone: precise, architectural, established, and restrained. Avoid neon, generic SaaS cards, and excessive motion.

## Information Architecture

- `/` and `/ar/`: home
- `/services/` and `/ar/services/`: services
- `/projects/` and `/ar/projects/`: project portfolio
- `/about/` and `/ar/about/`: company profile
- `/gallery/` and `/ar/gallery/`: visual gallery
- `/contact/` and `/ar/contact/`: enquiry and WhatsApp
- `/faq/` and `/ar/faq/`: common questions
- `/blog/` and `/ar/blog/`: journal
- `/privacy/` and `/ar/privacy/`: privacy notice
- `/terms/` and `/ar/terms/`: terms of use
- `/services/{slug}/` and `/ar/services/{slug}/`: six service detail pages
- `/projects/{slug}/` and `/ar/projects/{slug}/`: three project detail pages

## Delivery Phases

1. Shared bilingual design system, navigation, footer, accessibility patterns, mobile drawer, WhatsApp contact action, and home page.
2. Complete all menu pages and reusable project/service modules in English and Arabic, with right-to-left Arabic layout.
3. Add KPG-approved project photography and sourced demo imagery, responsive formats, and descriptive bilingual alt text.
4. Launch audit: localization, assets, responsive behavior, accessibility, technical behavior, links, metadata, and performance.

## Homepage Pattern

1. Full-bleed hero and two CTAs.
2. KPG introduction and integrated delivery proposition.
3. Numbered service carousel/grid.
4. Process and technical capabilities.
5. Featured project listing and project gallery.
6. Quote CTA, FAQ, and contact-led footer.

## Bilingual Rules

- English uses `lang="en" dir="ltr"`; Arabic uses `lang="ar" dir="rtl"`.
- Each page links to its equivalent locale path.
- CSS uses logical properties so layouts mirror correctly.
- Phone, WhatsApp, email, and URLs remain left-to-right within Arabic content.

## Audit Checklist

- No Dubai, UAE, Fortezza, reference-company names, links, or copied copy appear in public text.
- All menu routes and their language equivalents resolve.
- Navigation works with keyboard, Escape, and touch.
- Pages work at 320px, 375px, 768px, 1024px, and desktop widths without horizontal scrolling.
- Interactive controls have visible focus states and minimum 44px touch targets.
- Images carry appropriate dimensions, lazy loading below the fold, and localized alt text.
- Arabic pages are fully translated and display right-to-left correctly.
- WhatsApp actions use `+965 51226096`.
- Contact forms remain demo-only until a secure server-side endpoint is connected.
