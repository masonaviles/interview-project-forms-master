import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const SFArrowTopRight: RFC<SvgProps> = (props) => (
  <Svg width="10" height="11" fill="none" viewBox="0 0 10 11" {...props}>
    <path
      fill="inherit"
      d="M2.46912 0.480957L2.46912 1.98356L7.04736 1.98356L0 9.03092L1.00173 10.0327L8.04909 2.98529V7.56353H9.5517V0.480957L2.46912 0.480957Z"
    />
  </Svg>
)
