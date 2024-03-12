import { RFC } from '@center-inc/common-web'
import { clsx } from '../..'
import { ContinueButton } from './continue-button'
import { PlanCard } from './plan-card'
import { PlanSummary } from './plan-summary'
import { PriceCard } from './price-card'
import { PlanProps } from './types'

const isEnterprisePlan = (plan: Pick<PlanProps, 'slug'>) => plan.slug === 'enterprise'

export const PlanColumn: RFC<
  PlanProps & { onSubmit: () => void; buttonText: string; disabled?: boolean }
> = ({
  name,
  description,
  className,
  price,
  recommended,
  onSubmit,
  buttonText,
  disabled = false,
  ...plan
}) => {
  return (
    <div className={clsx(className)}>
      <PlanCard
        name={name}
        description={description}
        price={price}
        slug={plan.slug}
        recommended={recommended}
        className="flex flex-col justify-between"
        handleClick={onSubmit}
        disabled={disabled}
      >
        <div className="space-y-4">
          {price ? <PriceCard {...price} /> : null}
          {isEnterprisePlan(plan) ? <h4 className="text-xl">Custom Pricing</h4> : null}
          <ContinueButton
            slug={plan.slug}
            recommended={recommended}
            buttonText={buttonText}
            className="w-full"
            disabled={disabled}
          />
        </div>
      </PlanCard>
      <PlanSummary
        className={'px-6 pt-4 pb-6'}
        sellingPoints={plan.sellingPoints}
        key={name}
      />
    </div>
  )
}
