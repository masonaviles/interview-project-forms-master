import { isValidNetworkID } from './network-id/network-id'

describe('NetworkID', () => {
  describe(isValidNetworkID, () => {
    it('returns true on a valid network id', () => {
      expect(isValidNetworkID('ethereum-mainnet')).toBe(true)
    })

    it('returns false on an invalid network id', () => {
      expect(isValidNetworkID('ethereum-mainnft')).toBe(false)
    })
  })
})
