# AFAQ Al Manzil Properties Website

> **A premium, modern, and high-performance real estate website built for the UAE market.**

AFAQ Al Manzil Properties is a luxury real estate platform designed to showcase premium residential, commercial, investment, off-plan, completed, and rental properties across the UAE.

The website focuses on delivering an exceptional user experience through elegant design, smooth animations, reusable components, responsive layouts, and strong SEO optimization.

---

# Project Overview

This project is being developed using a **Sprint & Phase based workflow**, ensuring every page is completed, reviewed, tested, and optimized before moving to the next stage.

The primary goals are:

- Premium user experience
- Luxury modern UI
- Mobile-first responsive design
- Reusable component architecture
- High performance
- Accessibility
- SEO optimized for the UAE
- Easy future CMS integration

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Forms

- React Hook Form
- Zod
- Web3Forms

## UI & Utilities

- Lucide React
- next/font
- clsx
- tailwind-merge

## Future CMS

- Sanity CMS

> During the initial development phase, all content is managed through structured local JSON files. Once the frontend is complete, the project will move to a dedicated sprint for Sanity CMS integration.

## Deployment

- Git
- GitHub (Private Repository)
- Vercel

## SEO

- Next.js Metadata API
- Open Graph
- Sitemap
- Robots.txt

## Analytics (Future)

- Google Analytics 4
- Google Search Console

---

# Design Philosophy

The website follows a luxury minimal design language.

Core principles include:

- Premium visual hierarchy
- Elegant typography
- Spacious layouts
- Smooth interactions
- Minimal visual clutter
- High readability
- Accessibility-first approach
- Consistent branding

---

# Typography

## Heading

**Lora**

Used for:

- Hero headings
- Section titles
- Card titles
- Editorial headings

## Body

**Public Sans**

Used for:

- Paragraphs
- Navigation
- Buttons
- Form fields
- Supporting content

---

# Theme

All design tokens must be managed centrally.

Never hardcode:

- Colors
- Border radius
- Shadows
- Typography values
- Spacing values

Use Tailwind configuration for:

- Brand colors
- Typography scale
- Border radius
- Shadows
- Container widths
- Spacing tokens

The goal is to keep the design system consistent and maintainable.

---

# Design Language

The website should feel:

- Luxury
- Premium
- Modern
- Professional
- Elegant
- Editorial
- Minimal

Avoid:

- Heavy gradients
- Excessive shadows
- Overly colorful UI
- Crowded layouts
- Flashy animations

---

# Animation Principles

Animations should be subtle and meaningful.

Use Framer Motion for:

- Section reveal
- Image reveal
- Fade transitions
- Hover interactions
- Page transitions
- Timeline animations
- Accordion animations

Avoid:

- Excessive bouncing
- Over-animation
- Distracting motion
- Performance-heavy effects

Always respect:

- `prefers-reduced-motion`

---

# Responsive Design

Every component must work seamlessly across:

- Large Desktop
- Desktop
- Laptop
- Tablet
- Mobile
- Small Mobile

Each phase must be responsive before moving to the next phase.

---

# Accessibility

The project targets a high accessibility standard.

Requirements include:

- Semantic HTML
- Keyboard navigation
- Focus states
- Proper heading hierarchy
- Accessible buttons
- Accessible forms
- Image alt text
- Sufficient color contrast
- Touch-friendly controls

---

# SEO Strategy

The website is optimized for the UAE real estate market.

Primary focus:

- Dubai
- Abu Dhabi
- Sharjah
- UAE Real Estate
- Luxury Properties
- Off-Plan Properties
- Completed Projects
- Investment Opportunities
- Rental Properties

Implementation includes:

- Metadata API
- Open Graph
- Sitemap
- Robots.txt
- Structured data
- Semantic HTML
- Internal linking
- Optimized images

---

# Data Management

## Current

Structured Local JSON

## Future

Sanity CMS

Only dynamic content will move to Sanity.

Examples include:

- Properties
- Developers
- Team Members
- Testimonials
- Blog
- Media

Static UI components remain within the codebase.

---

# Project Structure

The project is built using reusable components.

Examples include:

- Navbar
- Footer
- Hero
- Section Heading
- Buttons
- Property Cards
- Team Cards
- Developer Marquee
- Timeline
- CTA
- Forms
- FAQ
- Accordions

Components should be reused whenever possible.

Avoid duplicate implementations.

---

# Development Workflow

Development follows a Sprint → Phase workflow.

Each phase is completed independently.

Workflow:

1. Review Figma Design
2. Analyze Requirements
3. Reuse Existing Components
4. Build the Feature
5. Ensure Responsiveness
6. Add Accessibility
7. Add Animations
8. Test
9. Fix Issues
10. Approval
11. Move to Next Phase

Do not automatically continue to the next phase without approval.

---

# Current Development Roadmap

## Sprint 1

Homepage

- Project Setup
- Navigation
- Hero
- Find Property by Location
- Opportunity Section
- Featured Properties
- Why Afaq
- Featured Developers
- About
- Team
- Property Journey
- Services
- Final CTA
- Footer

### Sprint 1.1

- Bug Fixes
- Responsive Improvements
- SEO
- Animation Refinement

---

## Sprint 2

About Us

- Hero
- About Afaq
- Our Direction
- What We Stand For
- Our Expertise
- Why Afaq
- Journey
- Developer Marquee
- Team
- CTA

### Sprint 2.1

- Bug Fixes
- Responsive Improvements
- SEO
- Animation Refinement

---

## Upcoming Sprints

- Services
- Properties
- Off-Plan
- Secondary Properties
- Rental Properties
- Careers
- Contact
- Enquiry
- Privacy Policy
- Terms & Conditions
- 404 Page
- Sanity CMS Integration
- Final QA
- Deployment

---

# Forms

The project uses:

- React Hook Form
- Zod
- Web3Forms

Forms include:

- Contact Form
- Property Enquiry
- General Enquiry
- WhatsApp Lead Form

Future integrations may include CRM and WhatsApp Business API.

---

# Future CMS Integration

A dedicated sprint will migrate local JSON data into Sanity.

Dynamic content planned for CMS:

- Properties
- Developers
- Team
- FAQs
- Testimonials
- Blogs
- Media Assets

The frontend architecture should be CMS-ready from the beginning.

---

# Code Standards

- TypeScript first
- Functional components
- Reusable architecture
- Clean folder structure
- No duplicated logic
- Strong typing
- Clear naming conventions
- Modular design
- Scalable architecture

---

# Definition of Done

A feature is considered complete only when:

- Matches the approved Figma design
- Fully responsive
- Accessibility compliant
- Optimized for performance
- SEO implemented
- Animations completed
- Cross-device tested
- Reusable where applicable
- Code reviewed
- Approved before proceeding

---

# Project Vision

The goal is to build a world-class real estate website that reflects the professionalism, trust, and premium service of **AFAQ Al Manzil Properties**, while providing a scalable technical foundation for future growth, CMS integration, and long-term maintainability.
