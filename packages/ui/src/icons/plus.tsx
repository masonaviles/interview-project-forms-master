import type { RFC, SvgProps } from '..'
import { Svg } from '../'

export const PlusIcon: RFC<SvgProps> = (props) => (
  <Svg width="1em" height="1em" fill="none" viewBox="0 0 13 13" {...props}>
    <path
      fill="currentColor"
      d="M5.66667 0V5.66667H0V7.08333H5.66667V12.75H7.08333V7.08333H12.75V5.66667H7.08333V0H5.66667Z"
    />
  </Svg>
)
