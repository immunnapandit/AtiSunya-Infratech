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
 *   image     — a Cloudinary delivery URL, built with `cld()` from a public ID
 *               (see src/lib/cloudinary.js). Upload new photography to the
 *               `atisunya/projects/<slug>` path in Cloudinary and reference
 *               that public ID here.
 *
 * Optional fields are omitted from the card when absent, so it is safe to
 * leave them out until the real figures are confirmed.
 *
 * NEEDED to finish these listings: location, size, config, starting price,
 * status, and real photography for every entry below except Gulshan Empire.
 * Send the details + photos and this file gets updated in one pass.
 */

import { cld } from '../lib/cloudinary';

const cardImage = (publicId) => cld(publicId, { width: 800, height: 600 });

export const projects = [
  {
    name: 'Gulshan Empire',
    developer: 'Gulshan Group',
    location: 'Noida',
    status: 'New Launch',
    image: cardImage('atisunya/projects/gulshan-empire'),
  },

  // --- Placeholder listings ------------------------------------------------
  // Replace these with real projects and photography before launch.
  {
    name: 'Vrinda Heritage Skyward',
    image: cardImage('atisunya/projects/vrinda-heritage-skyward'),
  },
  {
    name: 'Nirala Aspire Low Rise',
    developer: 'Nirala Group',
    image: cardImage('atisunya/projects/nirala-aspire-low-rise'),
  },
  {
    name: 'Capital Athena',
    image: cardImage('atisunya/projects/capital-athena'),
  },
  {
    name: 'Panchsheel Greens',
    developer: 'Panchsheel Group',
    image: cardImage('atisunya/projects/panchsheel-greens'),
  },
  {
    name: 'Nirala Estate',
    developer: 'Nirala Group',
    image: cardImage('atisunya/projects/nirala-estate'),
  },
  {
    name: 'Nirala Trio',
    developer: 'Nirala Group',
    image: cardImage('atisunya/projects/nirala-trio'),
  },
  {
    name: 'Ace Divino',
    developer: 'ACE Group',
    image: cardImage('atisunya/projects/ace-divino'),
  },
  {
    name: 'Express Astra',
    image: cardImage('atisunya/projects/express-astra'),
  },
];
