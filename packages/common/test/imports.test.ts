import { describe, expect, test } from 'vitest'

describe('importing module', () => {
  test('it imports', async () => {
    const mod = await import('../src')
    expect(mod).toMatchSnapshot()
  })
})
