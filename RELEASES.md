# Releases

## v1.4.1 - 2026-10-31
- Menu button moved to the left of the header, with a smaller badge and menu tile so badge, title and menu fit on one line.
- Saved Sites dropdown is always visible (above 7-Day Outlook), with an empty-state message when nothing is saved.
- Share Report is now the full text report with no bare link; the animated card is a separate Share Card button.
- Gauges are compact and side by side (weather stays full width); the summary fact tiles stay two across on phones. Tide diagram and everything below unchanged.
## v1.4.0 - 2026-10-31
- Visibility Estimate gauge and summary chip: rough clear/fair/poor with an approximate range, from the last 3 days of rain (Open-Meteo), sea state, swell, wind chop and tide range. Advisory only, not part of the grade.
- New Dive Type (Shore/Boat) and Site Faces (N-NW) fields in the search form; Dive Type default in Settings; Site Faces is saved with saved sites and remembered with the last search.
- Site Notes card: what the wind, swell, current, slack tide and moon mean for a shore or boat dive at that facing (onshore/offshore/cross-shore wind, exposed/wrapping/sheltered swell, seaward/landward/along-shore current).
- Moon and Tide Strength tiles (phase, % lit, spring/neap) and advice on flow and slack. Moon and visibility are also in Share Report.
- Float Plan button: editable form (site, coordinates, date, dive window, expected out, no-check-in alert time, entry or launch, vessel, depth, buddy, emergency contact, notes) with live preview, shared as text. Buddy and contact are remembered on the device.

## v1.3.6 - 2026-10-31
- Background fish now lead with their heads in both directions (they were swimming tail-first).

## v1.3.5 - 2026-10-31
- Header: badge and title sit on the same row as the menu button (header height unchanged).
- Hero scene: four tiny shrimp drift on random paths and seven small, faint background fish cross at different speeds.

## v1.3.4 - 2026-10-31
- Menu: "Refresh to Latest Version" button next to Reset All Settings; re-downloads the page from GitHub Pages bypassing the cache.
- Fixed the settings toggles swaying up and down: they shared the `.sw` class with the kelp animation; switches now use `.tgl`.

## v1.3.3 - 2026-10-31
- Saved sites are a dropdown with a Remove button instead of chips, so the list no longer grows the page.

## v1.3.2 - 2026-10-31
- Header: badge sits in line with the title; tagline removed; header height unchanged (219 px, 246 px on phones).

## v1.3.1 - 2026-10-31
- Share Report text reorganised into Overall, Conditions and Timing sections (weather, current, tides, slack window, sunrise/sunset, link).
- Share also attaches an animated GIF card: the happy crab waving next to the grade, place, date and key readings. Built in the browser after the report renders; if it is not ready or the device cannot share files, the text is shared alone.

## v1.3.0 - 2026-10-31
- Saved sites: Save Site on the grade card, pick from the dropdown to search it, Remove to delete (`dive-sites`, up to 12).
- 7-Day Outlook: strip of seven days with grade, best window and a Best Day badge; tap a day to open it.
- Compare Sites: two places side by side for one date, better cells underlined.
- Summary card: chips in even rows, plus Best 3-Hour Window, Slack-Tide Window, Sunrise and Sunset tiles.
- Tides: larger chart with times, slack-window bar and dive window; text moved under a Tide Details caret.
- Hour-by-hour best block bar is green; sources collapsed by default.
- Title no longer wraps; bubbles added across the centre of the scene (they were off-screen on phones) and kept visible under Reduce Motion.
- Footer is just "Good hunting, stay safe." over an animated ocean floor at the page bottom.

## v1.2.0 - 2026-10-31
- Menu button (three bars, top right) opens a modal with Settings and About tabs.
- Settings: Dark Mode (follows device until changed), Hero Scene, Animations, Remember Last Search, Search After Using My Location, Default Units, Default Dive Window, Reset All Settings.
- Pin search now reverse-geocodes: grade card shows city and coordinates.
- Grading explainer collapsed behind a caret ("How Grades Work").
- Corgi gets a brown wagging tail with a white tip.
- Buttons and headers in Title Case.

## v1.1.0 - 2026-10-31
- Phone: 16px inputs (no iOS zoom on focus), horizontally scrollable hourly table, two-column form on small screens, safe-area insets, translucent status bar, home-screen icon (`apple-touch-icon.png`).
- Motion: gauge needles sweep to their value, cards fade in staggered, grade letter pops, spinner while loading. All disabled under reduced-motion.
- Features: "use my location" button, Share report (native share sheet, clipboard fallback), date capped to the 16-day forecast, results scroll into view.
- Fixes: saved units now restore on reload, hourly legend says orange (not blue) bar, gauge SVGs have score labels, status is an aria-live region, removed unused helpers.

## v1.0.0 - 2026-10-31
- Initial import of dive-conditions.html as index.html; added home-screen meta tags.
