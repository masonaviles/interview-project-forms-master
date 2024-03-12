import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const Edit: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.2.533L.533 11.2v4.267H4.8L15.467 4.8 11.2.533z"
      ></path>
    </Svg>
  )
}
