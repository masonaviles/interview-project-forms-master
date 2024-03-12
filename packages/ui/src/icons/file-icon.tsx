import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const FileIcon: RFC<SvgProps> = (props) => (
  <Svg width="27" height="27" fill="none" viewBox="0 0 27 27" {...props}>
    <path
      fill="inherit"
      d="M15.75 2.25H6.75C5.51074 2.25 4.5 3.26074 4.5 4.5V22.5C4.5 23.7393 5.51074 24.75 6.75 24.75H20.25C21.4893 24.75 22.5 23.7393 22.5 22.5V9L15.75 2.25ZM20.8125 10.125H14.625V3.9375L20.8125 10.125Z"
    ></path>
  </Svg>
)
