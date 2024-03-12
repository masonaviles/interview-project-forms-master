import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const ArrowRight: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.4 8l-4.267-4.267M14.4 8l-4.267 4.267M14.4 8H1.067"
      ></path>
    </Svg>
  )
}
