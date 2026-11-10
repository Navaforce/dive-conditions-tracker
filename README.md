# Dive Conditions Tracker ("Spearo's Dive Report")

Single-file web app that pulls live weather, marine, tide, water temperature, plankton and alert data for a dive site and summarizes go/no-go conditions for spearfishing and freediving.

**Live app:** https://navaforce.github.io/dive-conditions-tracker/

Built for iPhone: install it to the Home Screen from Safari. No build step and no CDN dependencies; everything is in `index.html`.

## Data sources (fetched client-side)

| Source | Used for |
|---|---|
| Open-Meteo | Forecast, marine conditions, geocoding |
| NOAA CO-OPS | Tides and water temperature |
| National Weather Service | Active alerts |
| OpenStreetMap Nominatim | Place search |
| `worker/` Cloudflare Worker | Satellite chlorophyll (plankton) readings |

## What it shows

- Overall go/no-go grade with the factors behind it.
- Visibility Estimate tile: reports only the rating (Excellent, Good, Fair, Poor). Plankton feeds the rating only when the data is 3 days old or newer; it never changes the overall grade.
- Share Report and Float Plan text.
- Saved sites, theme, scene and unit settings.

## Storage

No accounts and no server-side storage. The last search form (`dive-last`) and user settings (`dive-sites`, `dive-settings`) live in the browser's localStorage.

## Repo layout

| Path | Purpose |
|---|---|
| `index.html` | The whole app |
| `worker/chl.js`, `worker/wrangler.toml` | Cloudflare Worker that proxies chlorophyll data |
| `docs/BRIEF.md` | Purpose, scope, success criteria |
| `RELEASES.md` | Version history |

## Development and deploy

Edit `index.html`, push to `main`, and GitHub Pages serves it. Deploy the Worker from `worker/` with Wrangler (`wrangler deploy`).
