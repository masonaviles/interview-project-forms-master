import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const SFCopy: RFC<SvgProps> = (props) => {
  return (
    <Svg width="15" height="18" fill="none" viewBox="0 0 15 18" {...props}>
      <path
        fill="inherit"
        d="M2.5 1.5C1.80937 1.5 1.25 2.17125 1.25 3V13.5H2.5V3H11.25V1.5H2.5ZM5 4.5C4.30938 4.5 3.75 5.17125 3.75 6V15C3.75 15.8287 4.30938 16.5 5 16.5H12.5C13.1906 16.5 13.75 15.8287 13.75 15V6C13.75 5.17125 13.1906 4.5 12.5 4.5H5ZM5 6H12.5V15H5V6Z"
      ></path>
    </Svg>
  )
}
