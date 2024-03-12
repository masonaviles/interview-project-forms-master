import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const List: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 15 10" {...props}>
    <path
      fill="currentColor"
      d="M0 0V1.41667H14.1667V0H0ZM0 4.25V5.66667H14.1667V4.25H0ZM0 8.5V9.91667H14.1667V8.5H0Z"
    />
  </Svg>
)
