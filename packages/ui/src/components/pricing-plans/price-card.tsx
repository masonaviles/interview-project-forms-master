import { RFC } from '@center-inc/common-web'

export const PriceCard: RFC<{ amountInDollars: number; term: 'month' }> = ({
  amountInDollars,
  term = 'month',
}) => {
  return (
    <div className="flex items-end">
      <p className="text-5xl font-semibold text-black">${amountInDollars}</p>
      <div className="text-slate-400">{`/${term}`}</div>
    </div>
  )
}
