export enum SourceTypeID {
  EVM_CONTRACT = 'evm-contract-v1',
  EVM_NFT_CONTRACT = 'evm-nft-contract-v1',
  EVM_EOA = 'evm-eoa-v1',
  OFFCHAIN_NFT_METADATA = 'offchain-nft-metadata',
  NFT_MARKETPLACE = 'nft-marketplace-v1',
  FARCASTER_HUB = 'farcaster-hub',
}

export type SourceTypeConfig = {
  id: SourceTypeID
  name: string
  available: boolean
  description?: string
}

export const allSourceTypes: Record<SourceTypeID, SourceTypeConfig> = {
  [SourceTypeID.EVM_CONTRACT]: {
    id: SourceTypeID.EVM_CONTRACT,
    name: 'EVM Contract',
    available: true,
  },
  [SourceTypeID.EVM_NFT_CONTRACT]: {
    id: SourceTypeID.EVM_NFT_CONTRACT,
    name: 'EVM NFT Contract',
    available: false,
  },
  [SourceTypeID.EVM_EOA]: {
    id: SourceTypeID.EVM_EOA,
    name: 'EVM EOA',
    available: false,
  },
  [SourceTypeID.OFFCHAIN_NFT_METADATA]: {
    id: SourceTypeID.OFFCHAIN_NFT_METADATA,
    name: 'Offchain NFT Metadata',
    available: false,
  },
  [SourceTypeID.NFT_MARKETPLACE]: {
    id: SourceTypeID.NFT_MARKETPLACE,
    name: 'NFT Marketplace Data',
    available: false,
  },
  [SourceTypeID.FARCASTER_HUB]: {
    id: SourceTypeID.FARCASTER_HUB,
    name: 'Farcaster Hub',
    available: false,
  },
}

export enum DestinationTypeID {
  POSTGRES_FDW = 'postgres-fdw-v1',
  GRAPHQL = 'graphql-api-v1',
  REST_API = 'rest-api-v1',
  CSV_API = 'csv-api-v1',
  KAFKA_STREAM = 'kafka-stream-v1',
  GOOGLE_PUBSUB = 'google-pubsub-v1',
  WEBHOOK = 'webhook-v1',
  BIGQUERY = 'bigquery-v1',
}

export type DestinationTypeConfig = {
  id: DestinationTypeID
  name: string
  available: boolean
  description?: string
}

export const allDestinationTypes: Record<DestinationTypeID, DestinationTypeConfig> = {
  [DestinationTypeID.POSTGRES_FDW]: {
    id: DestinationTypeID.POSTGRES_FDW,
    name: 'Postgres Foreign Data Wrapper',
    available: true,
  },

  [DestinationTypeID.BIGQUERY]: {
    id: DestinationTypeID.BIGQUERY,
    name: 'Google BigQuery',
    available: false,
  },

  [DestinationTypeID.GOOGLE_PUBSUB]: {
    id: DestinationTypeID.GOOGLE_PUBSUB,
    name: 'Google Pubsub',
    available: false,
  },

  [DestinationTypeID.WEBHOOK]: {
    id: DestinationTypeID.WEBHOOK,
    name: 'Webhook',
    available: false,
  },

  [DestinationTypeID.CSV_API]: {
    name: 'CSV Download Link',
    available: false,
    id: DestinationTypeID.CSV_API,
  },
  [DestinationTypeID.REST_API]: {
    name: 'REST API',
    available: false,
    id: DestinationTypeID.REST_API,
  },
  [DestinationTypeID.GRAPHQL]: {
    name: 'GraphQL API',
    available: false,
    id: DestinationTypeID.GRAPHQL,
  },
  [DestinationTypeID.KAFKA_STREAM]: {
    name: 'Kafka Stream',
    available: false,
    id: DestinationTypeID.KAFKA_STREAM,
  },
}

export type IDestinationLike = {
  type: DestinationTypeConfig
  name: string
  url: string
  id: string
}

// export interface IChainpipeDestination {
//   destinationTypeConfig: DestinationTypeConfig
// }
export enum CreatePostgresFormVersion {
  'DATABASE_URL' = 'database-url',
  'MANUAL' = 'manual',
}
