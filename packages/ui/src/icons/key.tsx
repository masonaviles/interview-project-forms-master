import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const KeyIcon: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 17 10" {...props}>
    <path
      fill="currentColor"
      d="M4.958 0A4.958 4.958 0 1 0 9.71 6.375h3.041V8.5h2.833V6.375H17V3.542H9.71A4.959 4.959 0 0 0 4.957 0Zm0 2.833a2.125 2.125 0 1 1 0 4.25 2.125 2.125 0 0 1 0-4.25Z"
    />
  </Svg>
)
