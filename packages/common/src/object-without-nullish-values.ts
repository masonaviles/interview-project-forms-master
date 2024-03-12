export const objectWithoutNullishValues = <T extends Record<string, any>>(
  obj: T
): Record<keyof T, string> => {
  return Object.keys(obj)
    .filter((k) => {
      if (obj[k] == null) {
        return false
      }
      if (typeof obj[k] === 'undefined') {
        return false
      }
      return true
    })
    .reduce((acc, key) => {
      acc[key as keyof T] = obj[key]
      return acc
    }, {} as Record<keyof T, string>)
}
