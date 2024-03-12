type KeyFunc<T> = (item: T) => string

export const groupBy = <T>(items: Array<T>, keyFunc: KeyFunc<T>) => {
  return items.reduce((acc, item) => {
    const key = keyFunc(item)
    if (!(key in acc)) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {} as Record<string, Array<T>>)
}
