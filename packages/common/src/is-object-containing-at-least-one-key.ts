/**
 * Checks if something (can be null or undefined) is an object with at least one key.
 */
export function isObjectContainingAtLeastOneKey(value: any): boolean {
  if (Array.isArray(value)) {
    throw new Error('isObjectContainingAtLeastOneKey got an Array, not object')
  }
  return (
    value !== null &&
    value !== undefined &&
    typeof value === 'object' &&
    Object.keys(value).length > 0
  )
}
