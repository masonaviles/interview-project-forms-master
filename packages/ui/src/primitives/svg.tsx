import { SVGAttributes } from 'react'
import { RFC } from '@center-inc/common-web'

export type SvgProps = Omit<SVGAttributes<HTMLOrSVGElement>, 'xmlns'>

export const Svg: RFC<SvgProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    {props.children}
  </svg>
)
