type KeyFunc<T> = (item: T) => string

export const reshapeBy = <T>(items: Array<T>, keyFunc: KeyFunc<T>) => {
  return items.reduce((acc, item) => {
    const key = keyFunc(item)
    if (key in acc) {
      throw new Error(`duplicate item: ${key}`)
    }
    acc[key] = item
    return acc
  }, {} as Record<string, T>)
}
