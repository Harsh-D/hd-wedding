# Harsh & Priyanka — Wedding Invitation

A single-page wedding-invitation site built with [Next.js](https://nextjs.org) (App Router, static export), [Tailwind CSS](https://tailwindcss.com) 4, and [framer-motion](https://www.framer.com/motion/). Live at **https://harsh-d.github.io/hd-wedding/** — every push to `main` deploys automatically via GitHub Actions.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. In dev the base path is empty; in production the site is served under `/hd-wedding` (GitHub Pages).

## Customizing the site

- **All content** (names, dates, schedule, venue, photos) lives in [lib/wedding.ts](lib/wedding.ts). Search for `TODO:` — every placeholder for your data is marked.
- **Photos**: replace the files in `public/` keeping the same filenames — `moment-1.jpeg` … `moment-7.jpeg` (gallery) and `hero.jpeg` (social preview image).
- **RSVP**: the form posts to a Google Form. Create your own form, then put its `formResponse` URL and field (`entry.*`) IDs in [components/rsvp.tsx](components/rsvp.tsx).
- **Music**: the audio file is `public/navrai-maajhi-english-vinglish.mp3`; replace it (or update the `src` in [components/music-player.tsx](components/music-player.tsx)) to change the song.

## Deploying

`pnpm build` generates the static site into `out/`. Pushing to `main` triggers [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml), which builds and publishes to GitHub Pages.
