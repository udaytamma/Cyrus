# Cyrus - Personal Portfolio & Documentation Hub

Professional portfolio website showcasing AI/ML projects, technical writing, and interview preparation resources.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black.svg)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8.svg)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Live Site:** [https://zeroleaf.dev](https://zeroleaf.dev)

## Overview

Cyrus is a modern, responsive portfolio website built with Next.js 16 and React 19. It features:

- **Project Showcase** - Detailed documentation for AI/ML portfolio projects
- **Technical Blog** - Articles on system design, fraud detection, and TPM topics
- **Development Journey** - Timeline of project development with daily entries
- **Nebula** - Password-protected interview preparation section

## Features

### Public Pages
- **Home** - Hero section with featured projects and CTA
- **Projects** - Grid view with filtering, detailed project pages
- **Blog** - Technical articles with syntax highlighting
- **About** - Professional background and skills

### Protected Pages (Nebula)
- **System Design Guide** - Principal TPM interview preparation
- **Competency Matrix** - Skills assessment framework
- **Task Board** - Kanban-style task management
- **Capstone Projects** - AI/ML project deep dives

### Design
- **Theme** - Goldenrod (#DAA520) primary color
- **Dark/Light Mode** - System-aware with manual toggle
- **Responsive** - Mobile-first design with breakpoints at 768px and 1024px
- **Typography** - Clean, readable fonts optimized for technical content

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.0 |
| **Styling** | Tailwind CSS 4.0 |
| **Deployment** | Cloudflare Pages (Static Export) |
| **Icons** | Lucide React |
| **Code Highlighting** | Shiki |

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/udaytamma/Cyrus.git
cd Cyrus

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4001](http://localhost:4001) to view the site.

### Build for Production

```bash
# Create static export
npm run build

# Output in /out directory
```

## Project Structure

```
Cyrus/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page
│   │   ├── projects/           # Projects listing and detail
│   │   ├── blog/               # Blog posts
│   │   ├── journey/            # Development timeline
│   │   ├── nebula/             # Protected interview prep
│   │   └── about/              # About page
│   ├── components/             # Shared React components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── AuthGate.tsx        # Password protection
│   │   └── ThemeToggle.tsx     # Dark/light mode switch
│   └── data/                   # Static data
│       ├── projects.ts         # Project definitions
│       └── blog.ts             # Blog post metadata
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Configuration

### Environment Variables

No environment variables required for basic operation. The site is fully static.

### Customization

- **Theme colors**: Edit `src/app/globals.css` CSS variables
- **Projects**: Update `src/data/projects.ts`
- **Blog posts**: Add to `src/data/blog.ts`

## Deployment

The site is configured for static export and deploys to Cloudflare Pages:

```bash
# Build creates /out directory
npm run build

# Deploy to Cloudflare Pages
# Automatic via GitHub integration
```

### Cloudflare Pages Settings
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: 18

## Related Projects

This portfolio showcases these projects:

| Project | Description | Tech Stack |
|---------|-------------|------------|
| [AiIngredientScanner](https://github.com/udaytamma/AiIngredientScanner) | Multi-agent AI for ingredient safety | LangGraph, Gemini, Qdrant |
| [AiEmailAssistant](https://github.com/udaytamma/AiEmailAssistant) | AI-powered email categorization | Flask, Gemini, Gmail API |
| [MindGames](https://github.com/udaytamma/MindGames) | Mental math training app | Next.js, TypeScript |
| [FraudDetection](https://github.com/udaytamma/FraudDetection) | Real-time fraud detection platform | FastAPI, Redis, PostgreSQL |
| [TeleOps](https://github.com/udaytamma/teleops) | Telecom incident RCA with AI | FastAPI, LangGraph, RAG |

## License

This project is licensed under the MIT License.

## Author

**Uday Tamma**
- Portfolio: [zeroleaf.dev](https://zeroleaf.dev)
- GitHub: [@udaytamma](https://github.com/udaytamma)
