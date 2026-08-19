/**
 * Central image registry.
 *
 * Files live in `public/images/`, which is served from the site root — so a
 * file at `public/images/Hero/Hero1.jpg` is referenced as
 * `/images/Hero/Hero1.jpg` (no `public` in the path).
 *
 * Filenames containing spaces must be percent-encoded (` ` becomes `%20`).
 */

export const images = {
  // About section — supplied photography.
  aboutLarge: '/images/About/About1.jpg',
  aboutSmall: '/images/About/About2.jpg',

  // "Start Your Journey" call-to-action banner.
  ctaBanner: '/images/Projects/StartYourJourney.png',

  // "Why Choose Us" section.
  whyChooseUs: '/images/WhyChooseUs/whychooseus.jpg',

  // --- Still a placeholder: replace when the real photo is ready ---------
  contact: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=1400&fit=crop&q=80',
};

/**
 * Hero background slideshow. Add or remove entries freely — the slider
 * adapts, and hides its controls when only one slide is present.
 */
export const heroSlides = [
  {
    image: '/images/Hero/Hero1.jpg',
    alt: 'High-rise residential towers overlooking a green city district',
  },
  {
    image: '/images/Hero/Hero2.jpg',
    alt: 'City skyline of residential towers under construction at sunrise',
  },
];

/** Client avatars shown in the hero trust badge — square, 100x100. */
export const clientAvatars = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces',
];
