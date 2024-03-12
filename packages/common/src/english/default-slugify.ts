import slugify from 'slugify'

export { default as slugify } from 'slugify'

export const urlSlugify = (s: string) =>
  slugify(s, {
    lower: true,
    replacement: '-',
  })
