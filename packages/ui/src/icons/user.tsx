import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const User: RFC<SvgProps> = (props) => (
  <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.2 3.731A3.199 3.199 0 018 6.93 3.199 3.199 0 118 .533c1.767 0 3.2 1.432 3.2 3.198zM13.333 15.457H2.667v-2.13a3.2 3.2 0 013.2-3.2h4.266a3.2 3.2 0 013.2 3.2v2.13z"
      clipRule="evenodd"
    ></path>
  </Svg>
)
