# Frontline AI, Landing Page

A landing page for an AI receptionist service for home service businesses (plumbing, HVAC, electrical, roofing, and similar trades), built with Next.js (App Router, TypeScript) and Tailwind CSS. Visual language is inspired by the ElevenLabs marketing site (generous whitespace, confident type, restrained motion), adapted to a light, warm theme with a single accent color.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To build for production:

```bash
npm run build
npm run start
```

## Where things live

- `lib/content.ts`, all page copy in one place. Edit this file to change any text on the site.
- `components/`, one file per section (Hero, ChatDemo, Pricing, FAQ, and so on).
- `components/icons.tsx`, a small registry mapping icon names to Fluent UI icon components. Add a new icon by importing it from `@fluentui/react-icons` and adding it to the registry.
- `app/globals.css`, color tokens (under `:root` and `@theme inline`) and the reveal/chat animation keyframes.

## Notes on a few choices

- Icons are from `@fluentui/react-icons` (Microsoft Fluent UI System Icons). No emoji are used anywhere on the page.
- Fluent icon components rely on client side styling, so they're rendered through the `Icon` component in `components/icons.tsx`, which is the one Client Component every other (server rendered) section imports. You do not need to think about this when editing copy; it only matters if you add a Fluent icon directly to a new component; import it into `icons.tsx` instead and render it with `<Icon name="..." />`.
- The "See It In Action" chat demo (`components/ChatDemo.tsx`) plays once, automatically, when it scrolls into view: a typing indicator, then a message, repeated for each turn, with pacing based on message length, then the outcome chips, then the closing line. There's a "Replay" button to run it again. It respects `prefers-reduced-motion` by showing the final state immediately.
- Section entrances use a small one time fade and slide (`components/Reveal.tsx`), not a continuous or looping animation.
- Fonts are the system UI stack (no external font request at build time), which also means the project builds without network access.
- Every dash from the original source content was rewritten with proper punctuation or restructured wording, per the brief; `lib/content.ts` is the dash free source of truth.

## Placeholder items to swap before launch

- The nav CTA and most buttons point to in page anchors (`#contact`, `#demo`, and so on). Wire these up to your actual booking or scheduling tool.
- `siteMeta` in `lib/content.ts` holds the business name shown in the nav and footer; the favicon in `app/favicon.ico` is still the default Next.js icon.
# mattecall
