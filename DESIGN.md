# Ryntra website design system

## Visual thesis

Ryntra's native interface translated into a spacious browser composition:
system surfaces, large direct typography, the product's green accent, real
screenshots and glass only where a native layer would need depth.

## Scene and register

A Modrinth creator checks Ryntra between desktop work sessions, often on a
phone, tablet or laptop in either daylight or a dim room. The site follows the
system color scheme by default and gives the user an explicit override.

This is a brand surface with product behavior. The first viewport is a product
poster; every section after it explains one real workflow.

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

- One section, one job, one dominant product image.
- Use layout, type and separators before adding a container.
- Cards are reserved for releases, files or platform choices that are genuinely
  separate objects.
- Keep the hero edge-to-edge and asymmetrical. Never put it inside a card.
- Product screenshots stay real. Missing captures use explicit labeled
  placeholders and never fabricated UI.
- Glass is allowed only for fixed navigation, menus, dialogs and floating
  controls.

## Motion rules

- Hero content enters as one orchestrated sequence.
- Screenshots use no more than 36 px of scroll-linked depth.
- Menus, theme selection and release dialogs use fast ease-out transitions.
- Section content remains visible before JavaScript and during slow loading.
- `prefers-reduced-motion` removes movement and keeps quick opacity changes.
- No bounce, elastic motion, endless floating or scroll-jacking.

## AI-slop rejection

Reject changes that introduce:

- purple or blue decorative gradients;
- glowing background blobs or decorative grids;
- a centered generic SaaS hero;
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
