import { RFC } from '@center-inc/common-web'
import { Button, ButtonProps } from '../../primitives'
import { PlanProps } from './types'

export const ContinueButton: RFC<
  Pick<PlanProps, 'recommended' | 'slug'> & {
    buttonText: string
    disabled: boolean
  }
> = ({ recommended, slug, buttonText, disabled = false, ...props }) => {
  const variant: ButtonProps['variant'] = disabled
    ? 'disabled'
    : recommended
    ? 'blue'
    : 'default'

  return (
    <Button
      variant={variant}
      {...props}
      onClick={() => {
        /*NOP*/
      }}
      disabled={disabled}
    >
      {buttonText}
    </Button>
  )
}
