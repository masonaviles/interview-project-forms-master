import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../../primitives'

export const Ethereum: RFC<SvgProps> = (props) => (
  <Svg width="24" height="24" fill="none" viewBox="0 0 16 16" {...props}>
    <path
      fill="#343434"
      d="M7.998 0l-.106.365v10.58l.106.106 4.888-2.903L7.999 0z"
    ></path>
    <path fill="#8C8C8C" d="M7.999 0L3.11 8.148l4.888 2.903V0z"></path>
    <path
      fill="#3C3C3B"
      d="M7.999 11.981l-.06.074v3.768l.06.177 4.89-6.92-4.89 2.901z"
    ></path>
    <path fill="#8C8C8C" d="M7.999 16v-4.019L3.11 9.08 7.999 16z"></path>
    <path fill="#141414" d="M7.999 11.051l4.887-2.903-4.887-2.232v5.135z"></path>
    <path fill="#393939" d="M3.111 8.148l4.888 2.903V5.916L3.11 8.148z"></path>
  </Svg>
)
