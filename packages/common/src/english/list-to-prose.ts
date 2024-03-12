export const listToProse = (items: Array<any>) => {
  switch (items.length) {
    case 1:
      return items[0]
    case 0:
      return '(none)'
    default: {
      const part1 = items.slice(0, -1).join(', ')
      const last = items[items.length - 1]
      return `${part1}, and ${last}`
    }
  }
}
