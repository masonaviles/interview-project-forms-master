/**
 * Picks a random array element
 */
export const sample = <T>(arr: Array<T>): T | undefined => {
  if (arr && arr.length > 0) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  return undefined
}
