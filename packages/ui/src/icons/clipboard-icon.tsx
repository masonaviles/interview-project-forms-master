import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const ClipboardIcon: RFC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor" {...props}>
      <path
        d="M9 0C7.696 0 6.59659 0.837 6.18359 2H2C0.895 2 0 2.895 0 4V18C0 19.105 0.895 20 2 20H16C17.105 20 18 19.105 18 18V4C18 2.895 17.105 2 16 2H11.8164C11.4034 0.837 10.304 0 9 0ZM9 2C9.552 2 10 2.448 10 3C10 3.552 9.552 4 9 4H16V18H2V4H9C8.448 4 8 3.552 8 3C8 2.448 8.448 2 9 2ZM4 6V8H14V6H4ZM4 10V12H12V10H4ZM4 14V16H14V14H4Z"
        fill="white"
      />
    </Svg>
  )
}
