# Rockets Renovations website

Plain HTML and CSS. No build step. Works on GitHub Pages as is (publish from the root of the main branch).

## Swap the logo
- `brand/logo-light.svg`: logo for dark backgrounds (header and footer on every page)
- `brand/logo-dark.svg`: logo for light backgrounds (not used on the site right now)
- `brand/favicon.svg`, `brand/favicon-32.png`, `brand/apple-touch-icon.png`: browser tab and phone home-screen icons

Replace those files and keep the same names. A new logo with a different shape may need its height adjusted in `css/style.css` (`.logo img` and `.footer-logo img`).

## Swap photos
Photos in `images/` are real job photos from the client's shared albums, cropped, resized and with location metadata stripped. To change one, replace the file and keep the same name. Sizes: gallery tiles (`kitchen-*`, `bathroom-*`, `outdoor-*`, `living-*`) are square, 800×800, and each one needs a matching uncropped copy of the same name in `images/full/` (longest side 1600) for the tap-to-enlarge viewer. Home page strip (`home-*`) is 1200×800. `hero-kitchen.jpg` is 1800×1000 and `about-home.jpg` is 1200×900. Strip EXIF before adding new photos, since phone photos carry the GPS location of the customer's house.

## Colors
All colors are in the `:root` block at the top of `css/style.css`.

## Quote form
`contact.html` posts to Web3Forms, which emails each request to the inbox the access key was created for. The key is in a hidden field in the form and is public by design. To send leads to a different inbox, create a new key at web3forms.com with that address and swap it in. Test from a browser on the live site: the free plan rejects server-side requests.

## Search and housekeeping files
`sitemap.xml` lists the five pages; add a line if a page is added. `robots.txt` points search engines at it. `404.html` is the not-found page and uses absolute paths on purpose. `manifest.webmanifest` sets the name, icon and color used when the site is saved to a phone home screen.
