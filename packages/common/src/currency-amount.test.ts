import { describe, expect, it } from 'vitest'
import { NativeCurrency } from './currency'
import { CurrencyAmount } from './currency-amount'

const ETH: NativeCurrency = {
  name: 'ETH',
  symbol: 'ETH',
  decimals: 18,
  isNative: true,
}

describe('ETH', () => {
  describe('fromAtomic', () => {
    const currencyAmount = CurrencyAmount.fromAtomic('10000000000000000000', ETH)

    it('should convert', () => {
      expect(currencyAmount.atomicAmount).toBe('10000000000000000000')
      expect(currencyAmount.wholeAmount).toEqual(10)
    })
  })
})
