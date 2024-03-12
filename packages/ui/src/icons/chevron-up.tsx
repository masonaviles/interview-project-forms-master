import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives/svg'
import type { SvgProps } from '../primitives/svg'

export const ChevronUp: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 11.6l6.933-7.467 6.934 7.467"
      ></path>
    </Svg>
  )
}
