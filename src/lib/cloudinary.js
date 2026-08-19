/**
 * Cloudinary delivery URL builder.
 *
 * Only the cloud name is needed to build a delivery URL — it's a public
 * identifier, safe to ship in the frontend. The API key/secret are used only
 * once, out-of-band, to upload assets to the account; they must never appear
 * in this codebase.
 *
 * Every URL requests `f_auto,q_auto`, which lets Cloudinary pick the best
 * format for the visitor's browser (AVIF/WebP where supported, falling back
 * to JPEG) and the best quality/size trade-off automatically — this is what
 * makes images load fast without any per-image manual compression work.
 */

const CLOUD_NAME = 'dkrjlekne';

/**
 * @param {string} publicId - e.g. 'atisunya/hero/hero1'
 * @param {object} [opts]
 * @param {number} [opts.width]
 * @param {number} [opts.height]
 * @param {'fill'|'fit'|'scale'} [opts.crop] - only applied when width or height is set
 * @param {'auto'|'faces'|'center'} [opts.gravity]
 */
export function cld(publicId, { width, height, crop = 'fill', gravity } = {}) {
  const t = ['f_auto', 'q_auto'];
  if (width) t.push(`w_${width}`);
  if (height) t.push(`h_${height}`);
  if (width || height) t.push(`c_${crop}`);
  if (gravity) t.push(`g_${gravity}`);
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${t.join(',')}/${publicId}`;
}
