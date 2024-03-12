import { NetworkID } from 'common'

export const Format = {
  contract: (params: { network: NetworkID; address: string }) =>
    `Contract ${params.network}/${params.address}`,
  nft: (params: { network: NetworkID; address: string; tokenID: string }) =>
    `${params.network}/${params.address}/nft/${params.tokenID}`,
}
