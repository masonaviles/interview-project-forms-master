import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const LinkedIn: RFC<SvgProps> = (props) => {
  return (
    <Svg width="14" height="14" fill="none" viewBox="0 0 14 14" {...props}>
      <path
        fill="#0277B5"
        fillRule="evenodd"
        d="M.716 4.816H3.41V13.5H.716V4.816zm4.383 0h2.584v1.186h.039c.357-.682 1.238-1.4 2.548-1.4 2.726 0 3.23 1.797 3.23 4.137V13.5h-2.69V9.278c0-1.007-.02-2.304-1.402-2.304-1.4 0-1.615 1.099-1.615 2.23V13.5H5.1V4.816zM2.063.5c.861 0 1.56.702 1.56 1.563 0 .865-.699 1.567-1.56 1.567a1.564 1.564 0 010-3.13z"
        clipRule="evenodd"
      ></path>
    </Svg>
  )
}
