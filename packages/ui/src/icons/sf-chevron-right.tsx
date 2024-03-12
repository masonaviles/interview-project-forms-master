import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const SFChevronRight: RFC<SvgProps> = (props) => (
  <Svg width="14" height="15" viewBox="0 0 14 15" {...props}>
    <path
      fill="inherit"
      d="M5.23552 2L4 3.23552L7.76448 7L4 10.7645L5.23552 12L10.2355 7L5.23552 2Z"
    />
  </Svg>
)
