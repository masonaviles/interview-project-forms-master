import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../primitives'

export const InfoCircle: RFC<SvgProps> = (props) => (
  <Svg width="14" height="14" fill="none" viewBox="0 0 14 14" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 9.8V6.6m0-2v-.008M7 1.4a5.6 5.6 0 110 11.2A5.6 5.6 0 017 1.4z"
    ></path>
  </Svg>
)
