import { describe, expect, it } from 'vitest'
import { uuidv4 } from './uuid-reexport'

describe('uuid', () => {
  it('imports and generates a UUID', () => {
    const result = uuidv4()
    expect(result).toBeTruthy()

    expect(result.length).toBe(36)
  })
})
