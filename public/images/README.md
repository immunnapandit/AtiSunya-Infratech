# Site images

Drop AtiSunya Infratech's own photography here, then point
`src/data/images.js` (and `src/data/projects.js` for listings) at the files.

Paths under `public/` are served from the site root — a file saved as
`public/images/hero.jpg` is referenced in code as `/images/hero.jpg`.

## Slots and recommended sizes

| Slot | Suggested file | Orientation | Min size | Notes |
|---|---|---|---|---|
| Hero background | `hero.jpg` | Landscape | 1920 x 1080 | Text sits bottom-left over a dark gradient — keep that area uncluttered |
| About (large) | `about-1.jpg` | Portrait | 900 x 1010 | Roughly 496:560 |
| About (small) | `about-2.jpg` | Portrait | 700 x 980 | Roughly 400:560 |
| Why choose us | `why-choose-us.jpg` | Portrait | 900 x 1200 | Tall crop beside the feature list |
| CTA banner | `cta-banner.jpg` | Landscape | 1920 x 700 | Text sits bottom-left over a dark gradient |
| Contact | `contact.jpg` | Portrait | 1200 x 1400 | Right edge fades out — keep the subject left |
| Projects | `projects/<name>.jpg` | Landscape 4:3 | 800 x 600 | One per listing |

## Before you export

- **Format** — JPEG for photos (quality ~80). Use WebP if you want smaller
  files; every browser this site targets supports it.
- **File size** — keep each under ~300 KB. The hero and CTA banner are
  full-width, so they matter most for load time.
- **Naming** — lowercase, hyphenated, no spaces (`skyline-tower.jpg`).
- **Rights** — only use photos AtiSunya Infratech owns or has licensed.
  The current placeholders are Unsplash stock and should all be replaced
  before launch.
