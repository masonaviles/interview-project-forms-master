import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const Telegram: RFC<SvgProps> = (props) => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={props.className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.165 3.71706L3.43497 10.5541C2.22497 11.0401 2.23197 11.7151 3.21297 12.0161L7.76497 13.4361L18.297 6.79106C18.795 6.48806 19.25 6.65106 18.876 6.98306L10.343 14.6841H10.341L10.343 14.6851L10.029 19.3771C10.489 19.3771 10.692 19.1661 10.95 18.9171L13.161 16.7671L17.76 20.1641C18.608 20.6311 19.217 20.3911 19.428 19.3791L22.447 5.15106C22.756 3.91206 21.974 3.35106 21.165 3.71706Z"
      />
    </Svg>
  )
}
