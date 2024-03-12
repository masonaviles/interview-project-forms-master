// export { default as last } from 'lodash/last'
export const last = <T>(arr: Array<T>) => {
  if (arr.length > 0) {
    return arr[arr.length - 1]
  }
  return undefined
}
