import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const Folder: RFC<SvgProps> = (props) => (
  <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.533 13.333V2.667c0-.59.478-1.067 1.067-1.067h4.267L8 3.733h6.4c.59 0 1.067.478 1.067 1.067v8.533c0 .59-.478 1.067-1.067 1.067H1.6c-.59 0-1.067-.478-1.067-1.067z"
    ></path>
  </Svg>
)
