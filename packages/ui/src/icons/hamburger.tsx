import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const Hamburger: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path d="M20 7L4 7" strokeWidth="1.5" strokeLinecap="round" {...props} />
    <path d="M20 12L4 12" strokeWidth="1.5" strokeLinecap="round" {...props} />
    <path d="M20 17L4 17" strokeWidth="1.5" strokeLinecap="round" {...props} />
  </Svg>
)
