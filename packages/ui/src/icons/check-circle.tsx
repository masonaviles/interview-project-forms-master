import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../primitives'

export const CheckCircle: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.267 8.5l2.2 2.167 5.266-5.334M8 15.467A7.467 7.467 0 118 .533a7.467 7.467 0 010 14.934z"
      ></path>
    </Svg>
  )
}

export { CheckCircle2 } from 'lucide-react'
