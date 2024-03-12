import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '..'

export const Upgrade: RFC<SvgProps> = (props) => {
  return (
    <Svg fill="#000000" width="16" height="16" viewBox="0 0 32 32" id="icon" {...props}>
      <defs></defs>
      <path d="M21,24H11a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V26A2,2,0,0,0,21,24Zm0,4H11V26H21Z" />
      <path d="M28.707,14.293l-12-12a.9994.9994,0,0,0-1.414,0l-12,12A1,1,0,0,0,4,16H9v4a2.0023,2.0023,0,0,0,2,2H21a2.0027,2.0027,0,0,0,2-2V16h5a1,1,0,0,0,.707-1.707ZM21,14v6H11V14H6.4141L16,4.4141,25.5859,14Z" />
    </Svg>
  )
}
