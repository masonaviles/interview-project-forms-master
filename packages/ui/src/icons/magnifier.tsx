import { RFC, Svg } from '../'
import type { SvgProps } from '../'

export const Magnifier: RFC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.5 14.5l-3.525-3.453M7.07 12.643a5.571 5.571 0 110-11.143 5.571 5.571 0 010 11.143z"
      ></path>
    </Svg>
  )
}
