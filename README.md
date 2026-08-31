# Bloom Green — Landing Page

Editorial landing page for [Bloom Green](https://www.thebloomgreen.com) — plant-based air fresheners, candles and camphor cones steam-distilled in Kannauj, India.

Live: http://147.93.28.140:8095

## Stack

- [Vite](https://vitejs.dev) + React 18
- Tailwind CSS v4
- [lucide-react](https://lucide.dev) icons
- Product photography and botanical cutouts generated with Gemini image models; hero product cutouts keyed from real product photos

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

`dist/` is a fully static site. On the VPS it lives at `/var/www/bloomgreen`, served by nginx on port 8095.
