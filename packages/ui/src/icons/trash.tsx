import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const Trash: RFC<SvgProps> = (props) => {
  return (
    <Svg
      width="16"
      height="16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 6L5 6 21 6"></path>
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
      <path d="M10 11L10 17"></path>
      <path d="M14 11L14 17"></path>
    </Svg>
  )
}
