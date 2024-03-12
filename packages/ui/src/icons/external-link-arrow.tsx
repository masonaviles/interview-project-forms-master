import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const ExternalLinkArrow: RFC<SvgProps> = (props) => {
  return (
    <Svg width="19" height="19" fill="none" viewBox="0 0 19 19" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.825 1.175h-6.6m6.6 0v6.6m0-6.6L9.5 9.5M7.25 1.625h-4.5c-.621 0-1.125.503-1.125 1.125v13.5c0 .621.504 1.125 1.125 1.125h13.5c.621 0 1.125-.504 1.125-1.125v-4.5"
      ></path>
    </Svg>
  )
}
