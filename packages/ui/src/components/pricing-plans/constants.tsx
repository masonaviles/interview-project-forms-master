import { RFC } from '@center-inc/common-web'
import { PlanProps } from './'

const Highlight: RFC = ({ children }) => <span className="font-medium">{children}</span>

export const plans: Array<PlanProps> = [
  {
    slug: 'free',
    name: 'Free',
    description: 'Start building today, no credit card required',
    sellingPoints: [
      <p key="compute-units">
        <Highlight>10K compute units</Highlight> / month
      </p>,
      <p key="rate">
        <Highlight>At least 20 compute units</Highlight> / sec
      </p>,
      <p key="support">
        <Highlight>Support team</Highlight> access
      </p>,
    ],
    price: {
      amountInDollars: 0,
      term: 'month',
    },
  },
  {
    slug: 'builder',
    name: 'Builder',
    description: 'Best plan for growing projects',
    recommended: true,
    price: {
      amountInDollars: 1,
      term: 'month',
    },
    sellingPoints: [
      <p key="compute-units">
        <Highlight>100K compute units</Highlight> / month
      </p>,
      <p key="rate">
        <Highlight>At least 50 compute units</Highlight> / sec
      </p>,
      <p key="team-mgmt">
        <Highlight>Team management</Highlight>
      </p>,
      <p key="support">
        <Highlight>Priority Support</Highlight>
      </p>,
    ],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    description: 'Everything that a fully scaled project needs',
    sellingPoints: [
      <p key="infinite">
        <Highlight>As many compute units</Highlight> as you need
      </p>,
      <p key="infinite">
        <Highlight>No rate limits</Highlight>
      </p>,
      <p key="infinite">
        <Highlight>Team Management</Highlight>
      </p>,
      <p key="infinite">
        <Highlight>Dedicated support channel</Highlight>
      </p>,
      <p key="infinite">
        <Highlight>Enterprise SLAs</Highlight> available
      </p>,
    ],
  },
]
