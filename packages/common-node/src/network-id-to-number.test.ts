import { describe, expect, test } from 'vitest'
import { networkIdToNumber } from './network-id-to-number'

describe('network-id-to-number', () => {
  test('should work', () => {
    expect(networkIdToNumber('ethereum-mainnet', 24 * 60)).toEqual(288)
    expect(networkIdToNumber('polygon-mainnet', 24 * 60)).toEqual(1376)
    expect(networkIdToNumber('fantom-mainnet', 24 * 60)).toEqual(32)
  })

  test('should not exceed max value', () => {
    expect(networkIdToNumber('ethereum-mainnet', 2)).toBeLessThan(2)
  })
})
