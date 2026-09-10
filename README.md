# Kuwait Premium Group Website

Bilingual English and Arabic website for Kuwait Premium Group's interior design, fitout, construction, and renovation services.

## Stack

- Static HTML, CSS, and JavaScript
- Local Cal Sans, Golos Text, and Noto Kufi Arabic fonts
- Responsive English and RTL Arabic layouts
- Vercel clean-URL configuration

## Local Preview

Serve the repository root in directory-index mode:

```bash
npx serve -l 4173 .
```

The current development preview uses:

```text
http://localhost:4173/
```

Opening HTML files directly with `file://` is not supported because assets and routes use root-relative URLs.

## Routes

The site contains matching English and `/ar/` routes for:

- Home, Services, Projects, About, Contact, Gallery, FAQ, Journal, Privacy, and Terms
- Six service detail pages under `/services/`
- Three project detail pages under `/projects/`

All 38 public routes are listed in `sitemap.xml`.

## Shared UI

`js/site.js` renders the localized header, navigation drawers, search, newsletter, footer, sliders, accordions, and shared form interactions. `js/detail.js` renders service and project detail content from route metadata.

Contact and newsletter submissions are demonstration interactions only. They provide localized on-page feedback and do not send data to a backend.

## Deployment

`vercel.json` enables clean URLs and security headers for static deployment. Production deployment is intentionally not performed automatically from this workspace.
