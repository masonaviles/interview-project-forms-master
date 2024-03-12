/**
 * Shared across both native and non-native currencies.
 */
export type IBaseCurrency = {
  decimals: number
  name?: string
  symbol?: string
}

export type CurrencyProps = { decimals: number; name: string; symbol: string }

export abstract class Currency implements IBaseCurrency {
  decimals: number
  name: string
  symbol: string

  constructor(props: CurrencyProps) {
    this.decimals = props.decimals
    this.name = props.name
    this.symbol = props.symbol
  }
}

export type INativeCurrency = IBaseCurrency & {
  isNative: true
}

export class NativeCurrency extends Currency implements INativeCurrency {
  isNative: true = true as const

  constructor(props: CurrencyProps) {
    super(props)
  }
}

export type INonNativeCurrency = IBaseCurrency & {
  address: string
}

export class NonNativeCurrency extends Currency implements INonNativeCurrency {
  address: string

  constructor({ address, ...props }: Currency & { address: string }) {
    super(props)
    this.address = address
  }
}

export type IWrappedNativeCurrency = IBaseCurrency & {
  address: string
}

export class WrappedNativeCurrency extends Currency implements IWrappedNativeCurrency {
  address: string

  constructor({ address, ...props }: CurrencyProps & { address: string }) {
    super(props)
    this.address = address
  }
}

export type ICurrency = NativeCurrency | NonNativeCurrency | WrappedNativeCurrency
