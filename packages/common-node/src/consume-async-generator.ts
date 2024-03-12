export const consumeAsyncGenerator = async <T>(
  asyncGenerator: AsyncGenerator<T>
): Promise<T[]> => {
  const result: T[] = []
  for await (const value of asyncGenerator) {
    result.push(value)
  }
  return result
}

export const consumeAsyncGeneratorWithLimit = async <T>(
  asyncGenerator: AsyncIterable<T>,
  limit: number
) => {
  const result: T[] = []
  for await (const value of asyncGenerator) {
    result.push(value)
    limit -= 1
    if (limit < 0) {
      break
    }
  }
  return result
}

/**
 * Takes an async generator and generates split batches of a fixed length..
 */
export async function* consumeAsyncGeneratorInBatches<T>(
  asyncGenerator: AsyncIterable<T>,
  batchSize: number
) {
  const currentBatch: Array<T> = []

  for await (const item of asyncGenerator) {
    currentBatch.push(item)

    if (currentBatch.length === batchSize) {
      yield currentBatch
      currentBatch.length = 0
    }
  }

  if (currentBatch.length > 0) yield currentBatch
}
