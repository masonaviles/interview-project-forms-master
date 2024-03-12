import { deepEqual } from '../deep-equal'

export const deduplicateArrayOfObjects = <T>(arr: Array<T>) => {
  return arr.filter(
    (thing, index, self) => index === self.findIndex((t) => deepEqual(t, thing))
  ) as Array<T>
}
