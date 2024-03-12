import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../primitives'

export const Check: RFC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 15" {...props} fill="none">
      <path
        d="M17.959 0.292969L6.66602 11.5859L2.37305 7.29297L0.958984 8.70703L6.66602 14.4141L19.373 1.70703L17.959 0.292969Z"
        fill="currentColor"
      />
    </Svg>
  )
}
