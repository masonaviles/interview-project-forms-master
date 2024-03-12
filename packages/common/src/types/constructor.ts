/**
 * Custom type that should be used when we can safely use `any`. Please use sparingly and
 * with caution.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SafeAny = any

/**
 * Utility type representing a constructor for a class T.
 */
export type Constructor<T> = new (...args: SafeAny[]) => T
