import type { Story } from '@ladle/react'
import * as PricingPlanCompoent from './pricing-plans'

export const PriceCard: Story = () => (
  <PricingPlanCompoent.PriceCard amountInDollars={69420} term={'month'} />
)

export const PlanCard: Story = () => (
  <PricingPlanCompoent.PlanCard
    name="Pro"
    slug="pro"
    description="yolo"
    handleClick={() => null}
  />
)
