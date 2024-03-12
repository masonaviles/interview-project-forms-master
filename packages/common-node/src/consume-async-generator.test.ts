import { describe, expect, it } from 'vitest'
import { consumeAsyncGeneratorInBatches } from './consume-async-generator'

async function* asyncGenerator(items: number[]) {
  for (const item of items) {
    yield item
  }
}

describe('consumeAsyncGeneratorInBatches', () => {
  it('handles an empty generator', async () => {
    const gen = asyncGenerator([])
    const batched = consumeAsyncGeneratorInBatches(gen, 5)
    expect(await batched.next()).toEqual({ value: undefined, done: true })
  })

  it('handles fewer items than batch size', async () => {
    const gen = asyncGenerator([1, 2])
    const batched = consumeAsyncGeneratorInBatches(gen, 5)
    expect(await batched.next()).toEqual({ value: [1, 2], done: false })
    expect(await batched.next()).toEqual({ value: undefined, done: true })
  })

  it('handles items equal to batch size', async () => {
    const gen = asyncGenerator([1, 2, 3])
    const batched = consumeAsyncGeneratorInBatches(gen, 3)
    expect(await batched.next()).toEqual({ value: [1, 2, 3], done: false })
    expect(await batched.next()).toEqual({ value: undefined, done: true })
  })

  it('handles more items than batch size', async () => {
    const gen = asyncGenerator([1, 2, 3, 4, 5, 6])
    const batched = consumeAsyncGeneratorInBatches(gen, 3)
    expect(await batched.next()).toEqual({ value: [1, 2, 3], done: false })
    expect(await batched.next()).toEqual({ value: [4, 5, 6], done: false })
    expect(await batched.next()).toEqual({ value: undefined, done: true })
  })

  it('handles items not divisible by batch size', async () => {
    const gen = asyncGenerator([1, 2, 3, 4])
    const batched = consumeAsyncGeneratorInBatches(gen, 3)
    expect(await batched.next()).toEqual({ value: [1, 2, 3], done: false })
    expect(await batched.next()).toEqual({ value: [4], done: false })
    expect(await batched.next()).toEqual({ value: undefined, done: true })
  })
})
