
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
