export enum Networks {
  'arbitrum-mainnet' = 'arbitrum-mainnet',
  'avalanche-mainnet' = 'avalanche-mainnet',
  'base-goerli' = 'base-goerli',
  'base-mainnet' = 'base-mainnet',
  'bsc-mainnet' = 'bsc-mainnet',
  'celo-mainnet' = 'celo-mainnet',
  'ethereum-goerli' = 'ethereum-goerli',
  'ethereum-mainnet' = 'ethereum-mainnet',
  'ethereum-rinkeby' = 'ethereum-rinkeby',
  'fantom-mainnet' = 'fantom-mainnet',
  'harmony-mainnet' = 'harmony-mainnet',
  'optimism-mainnet' = 'optimism-mainnet',
  'polygon-mainnet' = 'polygon-mainnet',
  'solana-mainnet' = 'solana-mainnet',
  'ethereum-sepolia' = 'ethereum-sepolia',
  'zora-mainnet' = 'zora-mainnet',
}

export type NetworkID = string & keyof typeof Networks

export const isValidNetworkID = (s: string | NetworkID): s is NetworkID => {
  return Object.keys(Networks).includes(s)
}

export class InvalidNetworkID extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidNetworkID'
  }
}

export const parseNetworkID = (s: string | NetworkID): NetworkID => {
  if (!isValidNetworkID(s)) {
    throw new InvalidNetworkID(`${s} is an invalid network ID`)
  }
  return s
}
