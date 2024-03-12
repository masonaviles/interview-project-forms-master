import { ICurrency } from './currency'

export type AtomicAmountLike = string | number
export type AtomicAmount = string

export type ICurrencyAmount = {
  currency: ICurrency
  atomicAmount: AtomicAmount
}

export class CurrencyAmount implements ICurrencyAmount {
  constructor(public readonly currency: ICurrency, public atomicAmount: string) {}

  public get wholeAmount() {
    return parseInt(this.atomicAmount, 10) / 10 ** this.currency.decimals
  }

  static fromAtomic(atomicAmount: AtomicAmountLike, currency: ICurrency) {
    if (typeof atomicAmount !== 'string') {
      atomicAmount = atomicAmount.toString()
    }
    return new CurrencyAmount(currency, atomicAmount)
  }

  static fromWhole(wholeAmount: number | string, currency: ICurrency) {
    if (typeof wholeAmount === 'string') {
      wholeAmount = parseInt(wholeAmount, 10)
    }
    return new CurrencyAmount(
      currency,
      (wholeAmount * 10 ** currency.decimals).toString()
    )
  }
}
