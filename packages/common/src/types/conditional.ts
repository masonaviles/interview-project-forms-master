/**
 * Return True if T is `undefined`, otherwise return False.
 *
 * Wrap types in array to prevent args from distributing via distributive conditional
 * types.
 *
 * Usage:
 *   - IfUndefined<undefined, T, F>: evaluates to `T`
 *   - IfUndefined<string | undefined, T, F>: evaluates to `F`
 *
 * Source: https://github.com/joonhocho/tsdef
 */
export type IfUndefined<T, True, False> = [T] extends [undefined] ? True : False

/**
 * Return True if T could potentially be `undefined`, otherwise return False.
 *
 * Wrap types in array to prevent args from distributing via distributive conditional
 * types.
 *
 * Usage:
 *   - IfOptionallyUndefined<undefined, T, F>: evaluates to `T`
 *   - IfOptionallyUndefined<string | undefined, T, F>: evaluates to `T`
 *
 * Source: https://github.com/joonhocho/tsdef
 */
export type IfOptionallyUndefined<T, True, False> = [undefined] extends [T]
  ? True
  : False

/**
 * Used to represent JSON with an unknown format
 */
export type JSONValueType =
  | string
  | number
  | boolean
  | { [x: string]: JSONValueType }
  | Array<JSONValueType>
