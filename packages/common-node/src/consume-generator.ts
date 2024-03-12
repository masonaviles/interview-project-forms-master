export const consumeGenerator = <T>(generator: Generator<T>): T[] => {
  const result: T[] = []
  for (const value of generator) {
    result.push(value)
  }
  return result
}
