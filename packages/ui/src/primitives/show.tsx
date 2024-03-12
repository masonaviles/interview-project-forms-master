import { RFC, twMerge } from '../'

export const Show: RFC<{ when?: boolean }> = ({ className, when = true, ...props }) => (
  <div className={twMerge(!when ? 'hidden' : '', className)}>{props.children}</div>
)
