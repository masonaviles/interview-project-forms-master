import { humanize as defaultHumanize } from 'inflection'
import { NetworkID } from './network-id'

export const humanizeLabel = (label: string) => {
  switch (label.toLowerCase()) {
    case 'tokenid':
      return 'Token ID'
    case 'json':
      return 'JSON'
    case 'curl':
      return 'curl'
    case 'axios':
      return 'axios'
    case 'http':
      return 'HTTP'
    case 'https':
      return 'HTTPS'
    case 'grpc':
      return 'gRPC'
    default:
      return defaultHumanize(label)
  }
}

export const humanizeNetworkID = (networkID: NetworkID | string) => {
  const parts = networkID.split('-')
  if (parts.length === 2) {
    if (parts[1] === 'mainnet') {
      return humanizeLabel(parts[0])
    }
  }
  return parts.map(humanizeLabel)
}
