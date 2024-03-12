import React, { createElement, useMemo } from 'react'
import { NetworkID } from 'common'
import { RFC } from '@center-inc/common-web'
import { Arbitrum } from './arbitrum'
import { Avalanche } from './avalanche'
import { Base } from './base'
import { Bsc } from './bsc'
import { Celo } from './celo'
import { Ethereum } from './ethereum'
import { Fantom } from './fantom'
import { Optimism } from './optimism'
import { Polygon } from './polygon'
import { Solana } from './solana'
import { Zora } from './zora'

const networkLogoMap: Partial<Record<NetworkID, React.ElementType>> = {
  'arbitrum-mainnet': Arbitrum,
  'avalanche-mainnet': Avalanche,
  'base-goerli': Base,
  'base-mainnet': Base,
  'bsc-mainnet': Bsc,
  'celo-mainnet': Celo,
  'ethereum-goerli': Ethereum,
  'ethereum-mainnet': Ethereum,
  'ethereum-rinkeby': Ethereum,
  'ethereum-sepolia': Ethereum,
  'fantom-mainnet': Fantom,
  'optimism-mainnet': Optimism,
  'polygon-mainnet': Polygon,
  'solana-mainnet': Solana,
  'zora-mainnet': Zora,
}

const Missing = () => <div />

export const NetworkIcon: RFC<{ network: NetworkID }> = ({ network, ...props }) => {
  const Icon = useMemo(() => networkLogoMap[network], [network])

  return createElement(Icon || Missing, props)
}
