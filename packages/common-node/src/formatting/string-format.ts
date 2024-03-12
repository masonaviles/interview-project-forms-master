/**
 * Convert arbitrary multi line string into a single line string.
 *
 * Useful for creating a multi line string using template literals but without the leading
 * whitespaces.
 */
export const toSingleLineString = (str: string): string => {
  return str
    .split(/\r\n|\n|\r/)
    .map((l) => l.replace(/^\s+/gm, ''))
    .join(' ')
    .trim()
}
