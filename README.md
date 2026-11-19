# Rockets Renovations website

Plain HTML and CSS. No build step. Works on GitHub Pages as is (publish from the root of the main branch).

## Swap the logo
- `brand/logo-light.svg`: logo for dark backgrounds (header and footer on every page)
- `brand/logo-dark.svg`: logo for light backgrounds (not used on the site right now)
- `brand/favicon.svg`, `brand/favicon-32.png`, `brand/apple-touch-icon.png`: browser tab and phone home-screen icons

Replace those files and keep the same names. A new logo with a different shape may need its height adjusted in `css/style.css` (`.logo img` and `.footer-logo img`).

## Swap photos
Every photo is a labeled placeholder in `images/`. Replace a file with a real job photo of the same name. Photos are cropped to fit, so any landscape photo works (about 1200×800 or larger; the hero should be about 1800×1000).

## Colors
All colors are in the `:root` block at the top of `css/style.css`.

## Quote form
`contact.html` has the form layout only. It is not connected to anything yet. See the comment above the form.
