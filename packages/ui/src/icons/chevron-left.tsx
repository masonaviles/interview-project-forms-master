import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const ChevronLeft: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.467 1.133L4 8.067 11.467 15"
      ></path>
    </Svg>
  )
}
