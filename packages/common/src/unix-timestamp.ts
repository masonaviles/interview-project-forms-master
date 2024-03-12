export const unixTimestampToDate = (timestamp: number): Date => {
  return new Date(timestamp * 1000)
}
