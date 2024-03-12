import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const HomeIcon: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 16 14" {...props}>
    <path
      fill="currentColor"
      d="M7.792 0 0 7.013h2.125v6.375h4.25v-4.25h2.833v4.25h4.25V7.013h2.125L7.792 0Z"
    />
  </Svg>
)
