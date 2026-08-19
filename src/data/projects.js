/**
 * Project listings shown in the "Featured Developments" carousel.
 *
 * Fields:
 *   name      — project name as it should appear on the card
 *   developer — the builder, when the project is not AtiSunya's own. Shown as
 *               a "By <developer>" line so third-party projects are not
 *               presented as AtiSunya developments.
 *   location  — locality + city, e.g. 'Sector 150, Noida'          (optional
 *               — shows "Location to be confirmed" when omitted)
 *   size      — carpet/built-up range, e.g. '1425 to 5000 Sq.ft'   (optional)
 *   config    — unit configurations, e.g. '2BHK - 5BHK'            (optional)
 *   price     — starting price WITHOUT the rupee symbol, '1.06 Cr' (optional)
 *   status    — 'Ready to Move' | 'Under Construction' | 'New Launch' (optional)
 *   image     — path under `public/`, e.g. '/images/Projects/foo.jpg'
 *               (4:3 landscape reads best; encode spaces as %20)
 *
 * Optional fields are omitted from the card when absent, so it is safe to
 * leave them out until the real figures are confirmed.
 *
 * NEEDED to finish these listings: location, size, config, starting price,
 * status, and real photography for every entry below except Gulshan Empire.
 * Send the details + photos and this file gets updated in one pass.
 */

export const projects = [
  {
    name: 'Gulshan Empire',
    developer: 'Gulshan Group',
    location: 'Noida',
    status: 'New Launch',
    image: '/images/Projects/Gulshan%20Empire.png',
  },
  {
    name: 'Vrinda Heritage Skyward',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Nirala Aspire Low Rise',
    developer: 'Nirala Group',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Capital Athena',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Panchsheel Greens',
    developer: 'Panchsheel Group',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Nirala Estate',
    developer: 'Nirala Group',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Nirala Trio',
    developer: 'Nirala Group',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Ace Divino',
    developer: 'ACE Group',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80',
  },
  {
    name: 'Express Astra',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80',
  },
];
