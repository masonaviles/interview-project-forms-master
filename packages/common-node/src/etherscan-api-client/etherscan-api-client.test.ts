import { beforeAll, describe, expect, it } from 'vitest'
import { EtherscanAPIClient } from './etherscan-api-client'

describe.skip(EtherscanAPIClient, async () => {
  let etherscanAPIClient: EtherscanAPIClient

  beforeAll(() => {
    if (!process.env.ETHERSCAN_API_KEY) {
      throw new Error('Expected process.env.ETHERSCAN_API_KEY to be defined')
    }
    etherscanAPIClient = new EtherscanAPIClient(
      process.env.ETHERSCAN_API_KEY,
      'ethereum-mainnet'
    )
  })

  describe('getContractABI', async () => {
    it('should behavior', async () => {
      const contractABI = await etherscanAPIClient.getContractABI(
        // bitart
        '0xd70f41dd5875eee7fa9dd8048567bc932124a8d2'
      )
      expect(contractABI).toMatchSnapshot()
    })
  })
})
