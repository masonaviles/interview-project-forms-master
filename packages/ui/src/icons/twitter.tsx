import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../'

export const Twitter: RFC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" {...props}>
      <path
        fill="currentColor"
        d="M20.133 7.99704C20.146 8.17204 20.146 8.34604 20.146 8.52004C20.146 13.845 16.093 19.981 8.686 19.981C6.404 19.981 4.284 19.32 2.5 18.172C2.824 18.209 3.136 18.222 3.473 18.222C5.356 18.222 7.089 17.586 8.474 16.501C6.703 16.464 5.219 15.304 4.707 13.708C4.956 13.745 5.206 13.77 5.468 13.77C5.829 13.77 6.192 13.72 6.529 13.633C4.682 13.259 3.299 11.638 3.299 9.68004V9.63004C3.836 9.92904 4.459 10.116 5.119 10.141C4.034 9.41904 3.323 8.18404 3.323 6.78704C3.323 6.03904 3.522 5.35304 3.871 4.75504C5.854 7.19804 8.835 8.79504 12.177 8.97004C12.115 8.67004 12.077 8.35904 12.077 8.04704C12.077 5.82704 13.873 4.01904 16.105 4.01904C17.265 4.01904 18.312 4.50504 19.048 5.29104C19.958 5.11604 20.83 4.77904 21.604 4.31804C21.305 5.25304 20.668 6.03904 19.833 6.53804C20.644 6.45004 21.43 6.22604 22.152 5.91404C21.604 6.71204 20.919 7.42304 20.133 7.99704Z"
      />
    </Svg>
  )
}