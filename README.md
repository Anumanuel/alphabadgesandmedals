# Alpha Badges and Medals — Coming Soon

A "Coming Soon" landing page for **Alpha Badges and Medals Pty Ltd**, built with [Tailwind CSS](https://tailwindcss.com/).

## Project structure

```
alphabadgesandmedals/
├── index.html              # The page markup (loads compiled CSS + JS)
├── package.json
├── tailwind.config.js      # Brand colors & fonts live here
├── src/
│   ├── css/
│   │   └── input.css       # Tailwind directives + custom animations (edit this)
│   └── js/
│       └── main.js         # Hero year countdown + footer year (edit this)
└── dist/                   # Build output (served by index.html)
    ├── assets/
    │   └── img/            # Put the exported logo here
    ├── css/
    │   └── output.css      # Generated — do not edit by hand
    └── js/
        └── main.js         # Copied from src/js
```

## Getting started

```bash
npm install        # install Tailwind CSS + build tooling
npm run build      # compile CSS into dist/css and copy JS into dist/js
```

Then open `index.html` in a browser.

## Development

```bash
npm run dev        # copies JS once, then watches & rebuilds CSS on change
```

## Customizing

- **Colors / fonts:** edit `tailwind.config.js` (`brand.50`, `brand.900`, `brand.gold`).
- **Light → dark theme:** in `index.html`, swap `bg-brand-50 text-brand-900` on `<body>`
  for `bg-brand-900 text-brand-50`.
- **Logo:** export the supplied PDF to PNG/SVG, drop it in `dist/assets/img/`, and
  replace the placeholder `<div>` in `index.html` with an `<img>` tag (an example is
  in an HTML comment right above the placeholder).

## Notes

- Built with **Tailwind CSS v3** for compatibility with Node.js 14.
- The hero year animates a countdown to **1856** (the year the oldest brand,
  Stokes Badges, was established) as a small micro-interaction.
