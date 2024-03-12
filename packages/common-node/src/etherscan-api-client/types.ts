import { Interface as ContractInterface } from 'ethers'

export interface IContractABIFetcher {
  getContractABI(address: string): Promise<ContractInterface>
}
