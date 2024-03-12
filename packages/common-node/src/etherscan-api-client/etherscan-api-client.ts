import qs from 'querystring'
import axios, { AxiosInstance } from 'axios'
import { NetworkID } from 'common'
import { Interface as ContractInterface } from 'ethers'
import { IContractABIFetcher } from './types'

export class EtherscanAPIClient implements IContractABIFetcher {
  axios: AxiosInstance

  constructor(private readonly apiKey: string, private readonly network: NetworkID) {
    this.axios = axios.create({
      timeout: 10_000,
    })
    this.getAPIURL()
  }

  private getAPIURL() {
    switch (this.network) {
      case 'ethereum-mainnet':
        return 'https://api.etherscan.io/api'
      case 'optimism-mainnet':
        return 'https://api-optimistic.etherscan.io/api'
      case 'base-mainnet':
        return 'https://api.basescan.org/api'
      case 'base-goerli':
        return 'https://api-goerli.basescan.org/api'
      default:
        throw new Error(`Network ${this.network} unsupported by etherscan api for now`)
    }
  }

  private getRawContractABI(address: string) {
    const queryObject = {
      module: 'contract',
      action: 'getabi',
      address,
      apiKey: this.apiKey,
    }

    const apiURL = this.getAPIURL()

    return this.axios.get(`${apiURL}?${qs.stringify(queryObject)}`).then((resp) => {
      const resultAsString = resp.data.result
      return JSON.parse(resultAsString)
    })
  }

  public getContractABI(address: string) {
    return this.getRawContractABI(address).then(
      (result) => new ContractInterface(result)
    )
  }
}
