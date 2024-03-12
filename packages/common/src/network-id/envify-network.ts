import { NetworkID } from './network-id'

export const envifyNetwork = (n: NetworkID): string => n.replace('-', '_').toUpperCase()
