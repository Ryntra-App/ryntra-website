# Ryntra website design system

## Visual thesis

Ryntra is a web-native React product site with a strict developer-tool grid:
compact browser controls, direct copy, real application surfaces and the
product's green used only for state and identity.

## Scene and register

A Modrinth creator checks Ryntra between desktop work sessions, often on a
phone, tablet or laptop in either daylight or a dim room. The site follows the
system color scheme on first visit and gives the user a direct light/dark
toggle.

This is a product website, not a mobile interface stretched into a browser.
The first viewport states the product and exposes its working surfaces; later
sections operate as an index rather than a marketing presentation.

## Tokens

The canonical CSS tokens live in `src/styles/site.css`:

- `--background`
- `--surface`
- `--surface-raised`
- `--text-primary`
- `--text-secondary`
- `--accent`
- `--accent-foreground`
- `--separator`
- `--destructive`
- `--positive`
- `--warning`
- `--radius-small`
- `--radius-medium`
- `--radius-large`
- `--shadow-floating`
- `--content-width`

The accent is derived from the app's `#30D158` green. Typography uses the
platform system stack to preserve the native relationship.

## Composition rules

- One section, one job, one dominant piece of information.
- Use a strict grid, compact labels and separators before adding a container.
- Cards are reserved for releases, files or platform choices that are genuinely
  separate objects.
- Keep the hero direct and factual. Avoid four-line mobile headlines,
  aspirational slogans and duplicated platform copy.
- Product screenshots stay real. Missing captures use explicit labeled
  placeholders and never fabricated UI.
- Product screenshots appear as browser content, never inside fake phone
  hardware or decorative device mockups.
- Glass is allowed only for menus and dialogs.

## Motion rules

- Screenshots remain stable during scrolling so product UI stays readable.
- The hero uses a single staggered word reveal and a restrained rule sweep.
- Android/iOS screenshot switching uses directional movement and a shared
  selection indicator.
- Theme selection and release dialogs use fast ease-out transitions.
- Section entrances run once on load and never depend on scroll observers.
- Section content remains visible before JavaScript and during slow loading.
- `prefers-reduced-motion` removes movement and keeps quick opacity changes.
- No bounce, elastic motion, endless floating or scroll-jacking.

## AI-slop rejection

Reject changes that introduce:

- purple or blue decorative gradients;
- glowing background blobs or decorative grids;
- a centered generic SaaS hero;
- mobile-native surfaces copied literally into the website chrome;
- vague marketing lines where a product label would be clearer;
- identical three-card feature rows;
- a dashboard made from fake metrics;
- stock dashboards or fabricated Ryntra screens;
- glass on ordinary content surfaces;
- rounded pills for routine labels;
- testimonials, partner logos or statistics without a verifiable source;
- generic marketing copy that could describe any app;
- motion on every icon or text block.

Before merging a visual change, verify the seven target widths, both themes,
keyboard focus, reduced motion, no horizontal overflow and the production build.
