import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../../primitives'

export const Base: RFC<SvgProps> = (props) => (
  <Svg width="24" height="24" viewBox="0 0 50 50" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM7.52653 26.6176C8.34302 35.5503 15.8544 42.547 25 42.547C34.691 42.547 42.547 34.691 42.547 25C42.547 15.309 34.691 7.45296 25 7.45296C15.8043 7.45296 8.26072 14.5266 7.51371 23.5294H33.8235V26.6176H7.52653Z"
      fill="#0052FF"
    />
  </Svg>
)
