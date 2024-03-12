import { pluralize } from 'inflection'

export { pluralize } from 'inflection'

export const pluralizeNoun = (count: number, noun: string) => {
  if (count !== 1) {
    return `${count.toLocaleString()} ${pluralize(noun)}`
  }
  return `${count} ${noun}`
}
