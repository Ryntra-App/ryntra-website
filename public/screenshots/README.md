# Website screenshot assets

Components reference these stable filenames so production captures can be replaced
without code changes.

## Real Android captures

- `hero-mobile.webp` — derived from `docs/screenshots/developer-panel.png`
- `projects.webp` — derived from `docs/screenshots/developer-panel.png`
- `analytics.webp` — derived from `docs/screenshots/analytics.png`
- `teams.webp` — derived from `docs/screenshots/teams.png`
- `android.webp` — derived from `docs/screenshots/glass-theme.png`

## Replace before the next visual refresh

- `notifications.webp` — explicit placeholder; replace with an official notification screen
- `ios.webp` — explicit placeholder; replace with an official SwiftUI screen

Run `node scripts/prepare-site-assets.mjs` after updating the source captures.
