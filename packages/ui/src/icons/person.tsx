import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const PersonIcon: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 13 13" {...props}>
    <path
      fill="currentColor"
      d="M6.375 0a2.833 2.833 0 1 0 0 5.667 2.833 2.833 0 0 0 0-5.667Zm-2.26 8.07C2.12 8.512 0 9.48 0 10.98v1.77h12.75v-1.77c0-1.499-2.12-2.468-4.116-2.91a2.821 2.821 0 0 1-2.259 1.138c-.926 0-1.742-.45-2.26-1.138Z"
    />
  </Svg>
)
