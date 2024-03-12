export type PlanProps = {
  name: string
  description: string
  sellingPoints: Array<React.ReactNode>
  recommended?: boolean
  price?: {
    amountInDollars: number
    term: 'month'
  }
  slug: string
}

export type ContactIntentType =
  | 'say-hello'
  | 'custom-plan'
  | 'request-a-feature'
  | 'report-a-bug'
  | 'something-else'
