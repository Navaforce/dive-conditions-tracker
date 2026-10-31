# Dive Conditions Tracker

## Purpose
Single-file HTML app ("Spearo's Dive Report") that pulls live weather, marine, tide, water temperature and alert data for a dive site and summarizes go/no-go conditions.

## Users
David (spearfishing / freediving), on iPhone via home-screen web app.

## Scope
- Single `index.html`, no build step, no CDN dependencies.
- Live data only, fetched client-side: Open-Meteo (forecast, marine, geocoding), NOAA CO-OPS (tides, water temp), NWS alerts, OSM Nominatim.
- Deployed with GitHub Pages: https://navaforce.github.io/dive-conditions-tracker/
- Repo: https://github.com/Navaforce/dive-conditions-tracker

## Out of scope (for now)
- Supabase sync / accounts. Settings persist in localStorage on each device only.

## Success criteria
- Loads and fetches data on iPhone Safari; installs to home screen.
