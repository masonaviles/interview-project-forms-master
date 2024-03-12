import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const ChevronRight: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.333 14.933L12.8 8 5.333 1.067"
      ></path>
    </Svg>
  )
}
