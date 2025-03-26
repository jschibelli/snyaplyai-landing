# SynaplyAI Landing Page Documentation

## Overview

The SynaplyAI Landing Page is a Next.js-based marketing site designed to showcase SynaplyAI—an enterprise-grade AI content creation platform with real-time collaboration and adaptive AI handling. The page includes conversion-optimized CTAs, HubSpot form integration for lead capture, and Google Analytics for performance tracking.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Form Integration](#form-integration)
- [Analytics Integration](#analytics-integration)
- [Installation & Setup](#installation--setup)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [A/B Testing](#ab-testing)
- [Contributing](#contributing)

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Form Integration:** HubSpot
- **Analytics:** Google Analytics 4
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## Project Structure

> _Structure details are assumed to follow standard Next.js App Router conventions with separate folders for components, pages, styles, and utils._

---

## Key Features

### 1. Responsive UI
- Fully responsive design supporting all screen sizes
- TailwindCSS-based design system
- Smooth animations with Framer Motion

### 2. Conversion-Focused CTAs
- "Join the Beta" and "Secure Early Access" CTAs
- Event tracking for CTA interactions
- Support for A/B testing via experiment IDs

### 3. Form Integration
- HubSpot-powered forms for beta and early access signups
- Dynamic form rendering via JavaScript API
- Styled and branded confirmation pages with auto-redirection

### 4. SEO Optimization
- Metadata tags and Open Graph support
- Schema markup for rich search result previews
- Lighthouse-optimized performance

---

## Form Integration

SynaplyAI landing page supports two HubSpot forms:

### Early Access Form
- **Form ID:** `9edc5b80-7de8-491f-9aa2-528735e3d5ce`
- **Path:** `/early-access`
- **Purpose:** Capture early access requests

### Beta Form
- **Form ID:** `f081d6b8-8d0a-4acb-ba39-a489627973b7`
- **Path:** `/join-beta`
- **Purpose:** Register beta program users

> Forms are rendered via HubSpot JS API with custom event tracking and error fallback logic.

---

## Analytics Integration

Google Analytics 4 is configured with the following:

- **Measurement ID:** `G-THKJDTE7W3`

### Events Tracked
- Page views
- CTA clicks
- Form interactions (view, submit, abandon)

> Events are structured for conversion funnel analysis.

---

## Installation & Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### Steps
```bash
git clone https://github.com/your-org/synaplyai-landing.git
cd synaplyai-landing
npm install
cp .env.example .env.local # Add environment variables to `.env.local`
npm run dev
```

Visit http://localhost:3000

## Development Workflow
```bash
# Create a feature branch
git checkout -b feature/your-feature

# Make changes and test locally
npm run lint
npm run test

# Create a pull request to `main`
```

## Deployment

Vercel Main branch triggers production deployment

Pull requests generate preview deployments

## A/B Testing

CTA buttons support A/B testing through:

CTAButton component with props for:
- Experiment ID
- Variant ID

Steps to Add a New A/B Test:
1. Update CTAButton with new experimentId and variantId
2. Configure the test in Google Optimize
3. Analyze results via GA4 event tracking

## Contributing

- Follow development workflow
- Ensure all components are:
  - Responsive
  - Accessible
  - Styled via TailwindCSS
- Document all new features
- Verify form submissions and analytics