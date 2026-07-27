# Website screenshot assets

Components reference these stable filenames so production captures can be replaced
without code changes.

## Real Android captures

- `hero-mobile.webp` — derived from `docs/screenshots/developer-panel.png`
- `projects.webp` — derived from `docs/screenshots/developer-panel.png`
- `analytics.webp` — derived from `docs/screenshots/analytics.png`
- `teams.webp` — derived from `docs/screenshots/teams.png`
- `notifications.webp` — notification workspace
- `android.webp` — derived from `docs/screenshots/glass-theme.png`

## Real iOS captures

- `ios-projects.png` — projects workspace
- `ios-analytics.png` — analytics workspace
- `ios-teams.png` — teams workspace
- `ios-notifications.png` — notification settings

Run `node scripts/prepare-site-assets.mjs` after updating the source captures.
