import unorm from 'unorm';

const unwantedChars = /[\u0300-\u036F]/g;

export const TITLE_MAX_LENGTH = 70;
export const BODY_MAX_LENGTH = 25000;
export const EXCERPT_LENGHT = 140;

export const SLUG_SEPARATOR = '_';

export function encodeSlug(title, id) {
  const sanitizedTitle = unorm
    .nfkd(title)
    .replace(unwantedChars, '')
    .replace(/[^a-z0-9\s-]/gi, '')
    .replace(/-+/g, '-')
    .replace(/\s+/g, '-');
  return `${sanitizedTitle}${SLUG_SEPARATOR}${id}`;
}

export function decodeSlug(slug) {
  return slug.split(SLUG_SEPARATOR);
}
