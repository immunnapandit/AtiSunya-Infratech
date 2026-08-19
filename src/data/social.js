/**
 * Social / messaging links shown in the footer.
 *
 * Only entries with a real `href` are rendered — this keeps the footer from
 * shipping dead links that quietly point nowhere. Fill in a URL below and
 * the icon appears automatically; leave it blank and it stays hidden.
 *
 * The WhatsApp number is a placeholder (all zeros) — replace it with the
 * business number in both `whatsappLink` here and `FloatingButtons.jsx`.
 */

export const whatsappLink = 'https://wa.me/910000000000';

export const socialLinks = [
  { label: 'WhatsApp', href: whatsappLink, external: true },
  { label: 'Facebook', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
];
