/**
 * Use this to be sure when finding things:
 */
export type FindResultFound<T> = { found: true } & T
export type FindResultNotFound = { found: false; reason?: string; error?: string }
export type FindResult<T> = FindResultFound<T> | FindResultNotFound

export const found = <T>(obj: T) => ({ found: true, ...obj } as FindResultFound<T>)

export const notFound = (
  params: Omit<FindResultNotFound, 'found'> = {}
): FindResultNotFound => ({ found: false, ...params })

export const filterFound = <T>(arr: Array<FindResult<T>>): Array<FindResultFound<T>> =>
  arr.filter((item) => item.found) as Array<FindResultFound<T>>

export type CheckResult<T> = { success: false } | ({ success: true } & T)

export type MatchResult<T> = { match: false } | ({ match: true } & T)
