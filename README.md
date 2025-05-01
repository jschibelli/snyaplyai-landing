# SynaplyAI Landing Page

**SynaplyAI** is a next‑generation AI content creation platform with real‑time collaboration and adaptive AI handling. This repository contains the marketing landing page built with Next.js, TailwindCSS and HubSpot & Google Analytics integrations.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Development](#development)  
  - [Build & Deploy](#build--deploy)  
- [Configuration](#configuration)  
- [Key Integrations](#key-integrations)  
  - [HubSpot Forms](#hubspot-forms)  
  - [Google Analytics](#google-analytics)  
  - [Social Media Links](#social-media-links)  
- [Testing](#testing)  
- [Contributing](#contributing)  
- [License](#license)

---

## Features

- Responsive, mobile‑first UI with TailwindCSS  
- Hero, Problem‑Solution, Features, Impact & Testimonials sections  
- Conversion‑focused CTAs: “Join the Beta” & “Secure Early Access”  
- Dedicated form pages with HubSpot integration & custom styling  
- Google Analytics 4 event tracking (page views, CTA clicks, form submits)  
- Social links to LinkedIn & Facebook  
- High performance: Lighthouse Score ≥ 96, load time <1s  
- Comprehensive documentation & changelog

---

## Tech Stack

- **Framework**: Next.js (App Router)  
- **Language**: TypeScript  
- **Styling**: TailwindCSS  
- **Animations**: Framer Motion  
- **Forms**: HubSpot Forms API  
- **Analytics**: Google Analytics 4 (GA4)  
- **Deployment**: Vercel

---

## Project Structure

```
.
├── app/
│   ├── components/      # Reusable React components
│   ├── early-access/    # Early Access form page
│   ├── join-beta/       # Beta signup page
│   ├── privacy-policy/  # Privacy Policy page
│   ├── terms-of-service/# Terms of Service page
│   ├── types/           # TS global types (e.g., HubSpot)
│   ├── utils/           # Helper functions (analytics, ab‑testing)
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── public/              # Static assets (images, fonts, svg)
├── docs/                # Design docs, changelogs, status reports
├── tests/               # Unit & integration tests
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn  

### Installation

```bash
git clone https://github.com/your-org/synaplyai-landing.git
cd synaplyai-landing
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to preview.

### Build & Deploy

```bash
npm run build
npm run start      # for a production server
# or deploy to Vercel
vercel --prod
```

---

## Configuration

Create a `.env.local` in the project root:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=XXXXXXXXX
NEXT_PUBLIC_HUBSPOT_EARLY_ACCESS_FORM_ID=XXXXXXXX
NEXT_PUBLIC_HUBSPOT_BETA_FORM_ID=XXXXXXXXX
```

---

## Key Integrations

### HubSpot Forms

- **Early Access**: `/early-access` (Form ID `9edc5b80-7de8-491f-9aa2-528735e3d5ce`)  
- **Join Beta**: `/join-beta` (Form ID `f081d6b8-8d0a-4acb-ba39-a489627973b7`)  

Forms are injected via the HubSpot JS API and styled with our global CSS overrides. On submit we show a custom “Thank you” message and redirect after 3s.

### Google Analytics

- **GA4 Measurement ID**: `G-XXXXXXX`  
- Page views tracked on route change  
- Custom events: `cta_click`, `form_submission`, `form_abandon`  

Analytics logic lives in `app/components/Analytics.tsx` and `utils/analytics.ts`.

### Social Media Links

Footer includes:

- LinkedIn: https://www.linkedin.com/company/synaplyai  
- Facebook: https://www.facebook.com/profile.php?id=61574741668484  

---

## Testing

- **Unit Tests**: `npm run test` (Jest/React Testing Library)  
- **Linting**: `npm run lint` (ESLint + Prettier)  
- **Accessibility**: Manual checks with Lighthouse & axe  

---

## Contributing

1. Fork the repo & create a feature branch  
2. Follow coding conventions (TS, Tailwind, React Hooks)  
3. Write tests for new features  
4. Submit a pull request against `main`  
5. Ensure CI passes before merging

Please refer to [`docs/CHANGELOG.md`](docs/CHANGELOG.md) for detailed history and [`docs/Documentation.md`](docs/Documentation.md) for full technical docs.

---

## License

This project is **private** and proprietary to SynaplyAI.
