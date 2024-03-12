import { RFC } from '@center-inc/common-web'
import { clsx } from '../..'
import { SellingPoint } from './selling-point'
import { PlanProps } from './types'

export const PlanSummary: RFC<Pick<PlanProps, 'sellingPoints'>> = ({
  sellingPoints,
  className,
}) => (
  <div className={clsx('space-y-4 text-sm', className)}>
    {sellingPoints.map((point, index) => (
      <SellingPoint key={index}>{point}</SellingPoint>
    ))}
  </div>
)
