# Portfolio Project Context

This document provides context for AI assistants working on this portfolio project.

## Owner
- **Name:** Giancarlos Zambrano (goes by "GZ")
- **Email:** Giancarlos.zambrano@gmail.com
- **Location:** Williamsburg, Brooklyn, NYC (not willing to relocate)
- **Domain:** https://zambrano.nyc

## Background
- 15 years in project management (PMP, PMI-ACP certified)
- Originally started as Java developer in 2006
- 2008 financial crisis pushed into PM roles
- CS degree + masters in Information Systems
- Recently pivoted back to hands-on software development
- Uses AI (Claude) extensively for development work
- Competitive road and track runner (5K to half marathons, ran 5 full marathons)
- Chess player since childhood
- Teaches people practical AI/LLM usage

## Career Goals
- Seeking full-time employment in hands-on technical roles
- NOT interested in: large enterprise companies, traditional PM roles, positions without hands-on building
- Ideal roles: Solutions Engineer, Implementation Consultant, early-stage startup builder roles
- Open to freelance/consulting on the side but needs employment stability first
- Has been job searching for months with limited response

## Technical Stack

### This Portfolio Site
- **Framework:** React + Vite
- **Styling:** Tailwind CSS v3
- **Deployment:** Self-hosted Docker on Linux server
- **Domain:** zambrano.nyc
- **Push-to-deploy:** Custom git workflow (see git-deploy-reference.md)
- **Server:** 192.168.1.7 (home network)

### Other Projects Tech Stacks
See the projects array in `src/App.jsx` for current project listings.

**PaceWise:** Swift (native iOS)
**Little Branch Theater:** Next.js (Vercel)
**CTICU Scheduler:** React + React Native + Node.js/Express + PostgreSQL (self-hosted Docker)
**HOA Manager:** React + Node.js/Express + PostgreSQL (self-hosted Docker)

## Design Philosophy
- Clean, modern, but NOT corporate or template-y
- Purple (#7c3aed) as primary accent color
- Bold typography, good hierarchy
- Authentic and personal, not "selly"
- Inspired by sites like mouthwash.studio and raggededge.com but simplified
- Mobile-first responsive design
- Content comes before images on mobile

## Key Design Decisions Made
1. **No device frames** - Clean screenshots with shadows/borders instead of iPhone/laptop mockups (they caused aspect ratio issues)
2. **Alternating project backgrounds** - Gray/white alternating for visual separation
3. **Content-first on mobile** - Project description before images on small screens
4. **Hidden email address** - "Get in touch" button instead of displaying email publicly
5. **Tech stack pills** - Show specific technologies (React, Node.js, etc.) not vague terms like "Full Stack"
6. **No skills section** - Projects demonstrate capabilities better than icon grids
7. **No AI mention** - Don't call out AI-assisted development on the portfolio

## Important Files
- `src/App.jsx` - Main portfolio component
- `public/` - Static assets (logo, headshot, project screenshots)
- `index.html` - Title and favicon configuration
- `tailwind.config.js` - Tailwind configuration
- `docker-compose.yml` - Docker deployment config
- `Dockerfile` - Multi-stage build for production

## Git Workflow
This project uses a custom push-to-deploy setup:
- `git deploy` - Deploy to server (does NOT push to GitHub)
- `git publish` - Push to both GitHub and server
- `git redeploy` - Force push to server
- See `git-deploy-reference.md` for full workflow details

## Common Pitfalls
1. **Tailwind dynamic classes don't work** - Can't use `className="order-${variable}"`, must use full class names conditionally
2. **Public folder paths** - Files in `/public` are served from root, so use `/logo.webp` not `/public/logo.webp`
3. **Browser storage not supported** - Don't use localStorage/sessionStorage in artifacts, use React state instead
4. **Image aspect ratios** - Let images use natural dimensions, don't force aspect-video or fixed ratios

## Portfolio Content Guidelines
- Be direct and honest, not "selly"
- Emphasize problem-solving and building, not just tech stack
- Highlight PM background as advantage (understands users, gathers requirements) but focus on building
- Projects show: Problem → Solution → Impact structure
- Keep copy concise and confident

## Future Enhancements (Not Implemented Yet)
- Meta tags for social sharing (Open Graph, Twitter cards)
- Analytics tracking
- Resume/CV download link
- LinkedIn/GitHub links in footer
- Remaining project screenshots (PaceWise mobile, HOA desktop)

## Notes for Future Claude
- Owner is decisive but open to suggestions backed by reasoning
- Prefers understanding "why" before implementing changes
- Values consistency across the site
- Will push back on template-y or corporate design choices
- Wants authentic personality, not generic developer portfolio vibes
- When in doubt, ask questions rather than making assumptions