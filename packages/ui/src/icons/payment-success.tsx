import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../primitives'

export const PaymentSuccess: RFC<SvgProps> = (props) => (
  <Svg
    viewBox="0 0 24 24"
    className="mx-auto my-6 h-16 w-16 text-green-400 dark:text-green-200"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    ></path>
  </Svg>
)
