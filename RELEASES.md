# Releases

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
