import { describe, expect, test } from 'vitest'

describe('importing module', () => {
  test('it imports', async () => {
    const mod = await import('../src')
    expect(mod).toBeTypeOf('object')
  })

  test('exporting error module', async () => {
    const result = await import('../src')
    expect(result.createError).toBeTruthy()
  })
})
