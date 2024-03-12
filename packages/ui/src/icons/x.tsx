import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const X: RFC<SvgProps> = (props) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" {...props}>
      <path
        d="M5.62476 5.625L24.3748 24.375M5.62476 24.375L24.3748 5.625"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
