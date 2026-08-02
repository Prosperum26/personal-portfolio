# Portfolio Design System

> Version: 0.2
> Last Updated: 2026-08-02

---

# Purpose

This document defines the visual language, UX principles, and design decisions for this portfolio.

It serves as the single source of truth for UI implementation and review, ensuring that every component supports the portfolio’s core goal: helping recruiters and software engineers quickly evaluate technical ability, project depth, and professional fit.

Before implementing new UI, components should align with the rules in this document whenever possible.

---

# Product Vision

This portfolio is not a marketing landing page.

It is a professional engineering portfolio designed to help technical recruiters and software engineers quickly understand who this person is, what they build, and why they are worth interviewing.

The experience should communicate:

- Professionalism
- Technical competence
- Engineering maturity
- Continuous learning

---

# Target Audience

## Primary

- Technical Recruiters

## Secondary

- Software Engineers
- Hiring Managers

---

# UX Goals

Within the first 30–60 seconds, visitors should be able to answer:

- Who is this person?
- What technologies does he use?
- What projects has he built?
- Why should I consider him for an interview?
- How can I contact him?

---

# Design Philosophy

## Keywords

- Professional
- Technical
- Modern
- Minimal
- Intelligent

---

## Core Principles

### Content First

Content has higher priority than decoration. The interface should support comprehension rather than compete with it.

---

### Engineering over Decoration

The portfolio should feel like a well-crafted software product, not a polished marketing campaign. Every design choice should improve clarity, trust, or usability.

---

### Scanability First

Recruiters and engineers review quickly. Important information, including projects, stack, achievements, and contact details, should be easy to locate and understand.

---

### Simplicity over Complexity

Avoid unnecessary visual effects. Use spacing, hierarchy, and restraint to create clarity.

---

### Consistency

Every section should feel like part of the same product. Maintain consistency in color, typography, spacing, components, and motion.

---

# Visual Direction

## Inspiration

Primary

- Linear

Secondary

- Vercel
- GitHub
- Apple (typography and spacing only)

---

## Desired Feel

The website should feel:

- Clean
- Calm
- Reliable
- Premium
- Technical

---

## Avoid

Do not use:

- Glassmorphism-heavy layouts
- Neon hacker aesthetics
- Excessive gradients
- Flashy animations
- Gaming UI
- Cartoon illustrations
- Visual clutter

---

# Color System

## Philosophy

Use neutral colors as the foundation and reserve accent color for attention, emphasis, and interaction states. The interface should feel calm and trustworthy rather than loud.

Approximate distribution:

- 90% Neutral
- 10% Accent

---

## Palette

Primary

#0B2D72

Deep blue representing trust, professionalism, and engineering confidence.

---

Secondary

#0992C2

Used for secondary interactive elements and supporting emphasis.

---

Accent

#0AC4E0

Used sparingly for important calls to action, highlights, or key states.

---

Background

#FAFAFA

---

Surface

#FFFFFF

---

Text

#111827

---

Secondary Text

#6B7280

---

Border

#E5E7EB

---

## Usage Guidelines

- Primary actions should use the primary blue.
- Accent color should be used sparingly and only where it increases clarity.
- Neutral surfaces should dominate; avoid introducing multiple competing accent colors.

---

# Typography

## Philosophy

Typography is the primary visual tool for hierarchy. Use type to organize information clearly and reduce reliance on decorative visual treatments.

---

## Font

Primary Font

- Geist

Fallback

- Inter
- sans-serif

---

## Style

- Clean
- Technical
- Readable
- Moderate contrast
- Comfortable spacing

---

## Scale and Usage

- Use a clear typographic hierarchy for headings, body text, labels, and metadata.
- Body text should remain highly legible at standard reading sizes.
- Avoid excessive font weight variety; use bold sparingly for emphasis.
- Keep line length comfortable and avoid dense blocks of text.

---

# Layout

## Philosophy

Whitespace is intentional. The layout should communicate confidence and clarity, never feel crowded or overly dense.

---

## Content Width

Use a centered content container with a comfortable maximum width. Content should be easy to scan on desktop, tablet, and mobile.

---

## Spacing

Use a consistent spacing scale to create rhythm and alignment across sections. Avoid arbitrary spacing values when a system scale can be used.

---

## Responsive

Desktop-first, with careful adaptation for:

- Desktop
- Tablet
- Mobile

---

# Components

All components should share one visual language and feel like part of the same product system.

Core components:

- Header
- Footer
- Hero
- Buttons
- Cards
- Project Cards
- Section Titles
- Badges
- Social Links

---

## Buttons

Primary buttons should use the primary blue. Secondary buttons should remain understated and low-contrast. Hover and focus states should feel precise and subtle, never flashy.

---

## Cards

Cards should emphasize readability over decoration. Use clear spacing, restrained borders, and subtle elevation on interaction. Avoid dramatic scaling or excessive effects.

---

## Section Titles

Section titles should be concise, direct, and easy to scan. They should clearly define the purpose of each section without relying on novelty.

---

## Badges

Badges should be used for concise metadata such as stack, roles, or status. Keep them simple, readable, and visually consistent.

---

# Motion Design

## Philosophy

Motion should improve usability and make the experience feel polished, but it should never distract from the content.

---

## Motion Budget

Each section should contain at most one meaningful entrance animation. Interactive motion should appear only in response to user action.

---

## Entrance

Recommended:

- Fade
- Small slide-up
- Soft stagger

---

## Hover

Allowed:

- Small elevation
- Soft shadow
- Border color transition
- Slight background change

Avoid:

- Bounce
- Rotation
- Flip
- Large scaling

---

## Timing

Hover

150–250ms

Entrance

400–700ms

---

# Accessibility

The website should:

- Use semantic HTML
- Support keyboard navigation
- Maintain accessible color contrast
- Provide visible focus states
- Remain readable on all screen sizes
- Preserve clear hierarchy and content order for assistive technologies

---

# Future Features

Potential future additions:

- Dark Mode
- Blog
- Command Palette
- Search
- AI Assistant
- Interactive Timeline

---

# What This Portfolio Is Not

This portfolio is not:

- A marketing landing page
- A personal blog
- A UI animation showcase
- A design experiment
- A gaming-themed website

Instead, it is:

- A professional engineering portfolio
- A project showcase
- A technical profile
- A demonstration of engineering quality

---

# Decision Log

Future design decisions should be documented here before implementation. Examples include:

- Why a component was redesigned
- Why a color changed
- Why a layout changed
- Why a new interaction was introduced

This helps keep the design system coherent as the project evolves.

---

# Future Features

Potential future additions:

- Dark Mode
- Blog
- Command Palette
- Search
- AI Assistant
- Interactive Timeline

---

# What This Portfolio Is Not

This portfolio is NOT:

- A marketing landing page
- A personal blog
- A UI animation showcase
- A design experiment
- A gaming-themed website

Instead, it is:

- A professional engineering portfolio
- A project showcase
- A technical profile
- A demonstration of engineering quality

---

# Decision Log

Future design decisions should be documented here before implementation.

Examples:

- Why a component was redesigned
- Why a color changed
- Why a layout changed
- Why a new interaction was introduced

This helps keep the design consistent as the project grows.