# Website screenshot assets

Components reference these stable filenames so production captures can be replaced
without code changes.

## Real Android captures

- `dashboard.png` — dashboard workspace
- `hero-mobile.webp` — derived from `docs/screenshots/developer-panel.png`
- `projects.png` — derived from `docs/screenshots/developer-panel.png`
- `analytics.png` — derived from `docs/screenshots/analytics.png`
- `teams.png` — derived from `docs/screenshots/teams.png`
- `android.webp` — derived from `docs/screenshots/glass-theme.png`

## Real iOS captures

- `ios-dashboard.png` — dashboard workspace
- `ios-projects.png` — projects workspace
- `ios-analytics.png` — analytics workspace
- `ios-teams.png` — teams workspace
Run `node scripts/prepare-site-assets.mjs` after updating the source captures.
