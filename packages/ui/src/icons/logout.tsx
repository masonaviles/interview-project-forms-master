import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const LogOut: RFC<SvgProps> = (props) => (
  <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.4 8l-3.2 3.467M14.4 8l-3.2-3.2M14.4 8H4.267m4.266 6.4H1.6V1.6h6.933"
    ></path>
  </Svg>
)
