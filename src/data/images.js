/**
 * Central image registry.
 *
 * All images are served through Cloudinary (see `src/lib/cloudinary.js`) so
 * every visitor gets an auto-optimized format/size instead of one large file
 * for everyone. To replace a photo: upload the new file to the AtiSunya
 * Cloudinary account under the same public ID (or a new one) and update the
 * id below — no code changes needed beyond that.
 */

import { cld } from '../lib/cloudinary';

export const images = {
  // About section.
  aboutLarge: cld('atisunya/about/about1', { width: 900 }),
  aboutSmall: cld('atisunya/about/about2', { width: 700 }),

  // "Start Your Journey" call-to-action banner.
  ctaBanner: cld('atisunya/projects/start-your-journey', { width: 1920 }),

  // "Why Choose Us" section.
  whyChooseUs: cld('atisunya/why-choose-us/whychooseus', { width: 900, height: 1200, gravity: 'auto' }),

  // Contact section.
  contact: cld('atisunya/contact/contact', { width: 1200, height: 1400, gravity: 'auto' }),
};

/**
 * Hero background slideshow. Add or remove entries freely — the slider
 * adapts, and hides its controls when only one slide is present.
 */
export const heroSlides = [
  {
    image: cld('atisunya/hero/hero1', { width: 1920 }),
    alt: 'High-rise residential towers overlooking a green city district',
  },
  {
    image: cld('atisunya/hero/hero2', { width: 1920 }),
    alt: 'City skyline of residential towers under construction at sunrise',
  },
];

/** Client avatars shown in the hero trust badge — square, cropped to faces. */
export const clientAvatars = [
  cld('atisunya/avatars/avatar1', { width: 100, height: 100, gravity: 'faces' }),
  cld('atisunya/avatars/avatar2', { width: 100, height: 100, gravity: 'faces' }),
  cld('atisunya/avatars/avatar3', { width: 100, height: 100, gravity: 'faces' }),
  cld('atisunya/avatars/avatar4', { width: 100, height: 100, gravity: 'faces' }),
];
