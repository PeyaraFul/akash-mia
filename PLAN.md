# Portfolio Website Plan

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Theme:** Dark/Light toggle via `next-themes`
- **Contact:** Static form only (no backend)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout + ThemeProvider
│   ├── page.tsx                # Home page (all sections)
│   ├── globals.css
│   └── projects/
│       ├── page.tsx            # All projects grid
│       └── [id]/
│           └── page.tsx        # Single project detail page
├── components/
│   ├── Navbar.tsx              # Nav + theme toggle
│   ├── Hero.tsx                # Name, title, tagline
│   ├── About.tsx               # About me
│   ├── Skills.tsx              # Skills grid
│   ├── Projects.tsx            # Featured project cards (home)
│   ├── ProjectCard.tsx         # Reusable card component
│   ├── Contact.tsx             # Static form
│   └── Footer.tsx              # Footer + social links
├── data/
│   └── projects.ts             # Project data (centralized)
```

## Routes
| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Skills, featured Projects, Contact, Footer |
| `/projects` | All projects in card grid |
| `/projects/[id]` | Single project detail page (image, description, tech, links) |

## Sections (Home)
1. **Hero** — Name, role, tagline, CTA
2. **About Me** — Bio + photo placeholder
3. **Skills** — Tech chips (React, Next.js, Node, Express, MongoDB, JS, Tailwind, HTML5)
4. **Featured Projects** — 3-4 cards linking to `/projects`
5. **Contact** — Name, email, message (no backend)
6. **Footer** — Social links, copyright

## Key Decisions
- Project data lives in `src/data/projects.ts` — single source of truth
- Each project card links to `/projects/[id]` detail page
- Dark/light theme persisted via localStorage
- Mobile-first responsive with hamburger nav

## User Will Provide
- Project details (name, description, tech, links, images)
- Full name + tagline
- About me bio
- Social links
