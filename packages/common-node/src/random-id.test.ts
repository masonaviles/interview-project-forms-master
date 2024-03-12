import { describe, expect, it } from 'vitest'
import { randomHexID, randomID } from './random-id'

describe(randomID, async () => {
  it('should have the right length', async () => {
    const id = randomID(16)
    expect(id.length).toEqual(16)
  })

  it('should be random', async () => {
    const id = randomID(16)
    expect(id).not.toContain(' ')
    expect(randomID(16)).not.toEqual(id)
  })
})

describe(randomHexID, () => {
  it('should work', () => {
    const id = randomHexID(16)
    expect(id.length).toEqual(16)
  })
})
