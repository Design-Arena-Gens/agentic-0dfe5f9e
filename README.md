# Agentic Presence

High-contrast, agent-inspired landing page built with Next.js 16, Tailwind CSS, and lucide icons. The layout highlights autonomous workflows, live orchestration, and security guardrails with a cohesive gradient aesthetic that is ready for production deployment on Vercel.

## Stack

- Next.js 16 (App Router, React Server Components)
- Tailwind CSS with inline design tokens
- TypeScript
- [lucide-react](https://lucide.dev) icon set

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app boots at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run lint` – ESLint with Next.js defaults
- `npm run build` – production build and type checking
- `npm run dev` – hot-reloading development server

## Deployment

The project is configured for seamless Vercel deploys.

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-0dfe5f9e
```

After deployment propagates, verify the production alias:

```bash
curl https://agentic-0dfe5f9e.vercel.app
```
