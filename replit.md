# Piyush Kumar Rai - Portfolio Website

A fully animated, Gen-Z dark rave themed personal portfolio website built with Next.js, TypeScript, Three.js, and modern animation libraries.

## Overview

This is a highly customized portfolio website featuring:
- Interactive 3D graphics powered by Three.js
- Neon glow effects with purple, teal, blue, and magenta color scheme
- Smooth animations using Framer Motion and GSAP
- Responsive design for all screen sizes
- Seven complete pages: Home, About, Skills, Projects, Experience, Education, and Contact

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom CSS variables
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Me page
│   ├── skills/            # Skills showcase page
│   ├── projects/          # Projects gallery page
│   ├── experience/        # Experience timeline page
│   ├── education/         # Education page
│   ├── contact/           # Contact form page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page with 3D hero
│   └── globals.css        # Global styles and animations
├── components/
│   ├── three/             # Three.js 3D components
│   │   ├── Scene.tsx      # Main 3D canvas
│   │   ├── ParticleField.tsx  # Interactive particles
│   │   └── RotatingShape.tsx  # Rotating 3D object
│   ├── layout/            # Layout components
│   │   └── Navigation.tsx # Navigation bar
│   ├── ui/                # Reusable UI components
│   │   ├── Preloader.tsx  # Loading screen
│   │   ├── CursorFollower.tsx # Custom cursor
│   │   ├── GlowCard.tsx   # Glowing card component
│   │   ├── SkillBar.tsx   # Animated skill bars
│   │   ├── ProjectCard.tsx # Project cards with modal
│   │   └── Timeline.tsx   # Experience timeline
│   └── sections/          # Page sections
│       └── HeroSection.tsx # Home hero section
└── lib/
    └── data.ts            # Personal data and content
```

## Features

### Home Page
- Full-screen Three.js animated background with interactive particles
- Rotating 3D torus knot object
- Glitch text effect on name
- Neon-glowing typography
- Quick navigation buttons to Skills, Projects, and Contact

### About Page
- Animated sections with neon glow cards
- Personal information, mission, and hobbies
- Framer Motion scroll animations

### Skills Page
- Grid layout of skill categories
- Animated progress bars with glow effects
- Categories: Languages, Frameworks, AI/ML, Tools

### Projects Page
- 3D tilt effect on project cards
- Modal popup with full project details
- Tech stack tags and links

### Experience Page
- Animated timeline with neon connecting lines
- Scroll-triggered reveal animations
- Technology tags for each role

### Education Page
- Glowing card layout
- Progress bar to graduation
- Achievement badges
- Stats grid (CGPA, Projects, Certifications, Courses)

### Contact Page
- Gradient-bordered contact form
- Form validation with React Hook Form
- Social links (GitHub, LinkedIn, Email)
- Success animation on form submission

## Running Locally

The development server runs on port 5000:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

## Deployment

The project is configured for Replit Autoscale deployment:
```bash
npm run build
npm start
```

## Theme Colors

- **Neon Purple**: #b829dd
- **Neon Teal**: #00f5d4
- **Neon Blue**: #00bbf9
- **Neon Magenta**: #f72585
- **Dark Background**: #0a0a0f

## Personal Information

- **Name**: Piyush Kumar Rai
- **Role**: AI/ML Enthusiast, Developer, BCA Final Year Student
- **University**: Patliputra University
- **Email**: raipiyusharsh3@gmail.com

## Animation Libraries

### GSAP (GreenSock Animation Platform)
- Hero section text animations with glow effects
- Preloader text scaling and pulsing
- Page transition overlay effects
- GlowCard hover animations

### Framer Motion
- Page transitions with fade and slide effects
- Scroll-triggered reveal animations
- Hover state animations on buttons and cards
- Mobile menu animations

### Three.js
- Interactive particle field reacting to cursor
- Rotating 3D torus knot geometry
- Neon lighting effects
- Fallback background for non-WebGL environments

## Page Transitions

The portfolio uses a combination of:
1. GSAP-powered gradient overlay that slides in/out during navigation
2. Framer Motion's AnimatePresence for content fade transitions
3. This replaces traditional Barba.js transitions, which is incompatible with React/Next.js

## User Preferences

- Gen-Z dark rave aesthetic with neon colors
- High contrast dark backgrounds
- Glitch and pulse animations
- Interactive 3D elements
- Space Grotesk font family

## Preloader Behavior

The preloader shows once per session (tracked via sessionStorage). After the initial load animation completes, subsequent page navigations use smooth GSAP transitions without the preloader.
