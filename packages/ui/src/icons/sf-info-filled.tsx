import { RFC } from '@center-inc/common-web'
import { Svg } from '../primitives'
import type { SvgProps } from '../primitives'

export const SFInfoFilled: RFC<SvgProps> = (props) => (
  <Svg width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
    <g clipPath="url(#clip0_808_12694)">
      <path
        fill="inherit"
        d="M10 20C4.516 20 0 15.484 0 10 0 4.525 4.516 0 9.99 0 15.475 0 20 4.525 20 10c0 5.484-4.516 10-10 10zm-.24-8.054c.595 0 .978-.326 1.026-.748.01-.038.01-.086.01-.115.057-.489.431-.824 1.045-1.227 1.007-.642 1.61-1.217 1.61-2.358 0-1.678-1.524-2.666-3.365-2.666-1.726 0-2.905.748-3.25 1.707a1.506 1.506 0 00-.115.546c0 .508.403.863.872.863.384 0 .662-.163.873-.44l.134-.183c.336-.518.767-.757 1.314-.757.728 0 1.236.44 1.236 1.045 0 .604-.421.891-1.246 1.467-.71.498-1.218.997-1.218 1.85v.096c0 .604.384.92 1.074.92zm-.01 3.136c.691 0 1.247-.47 1.247-1.151 0-.671-.546-1.15-1.246-1.15s-1.256.488-1.256 1.15c0 .671.565 1.15 1.256 1.15z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_808_12694">
        <path fill="transparent" d="M0 0H20V20H0z"></path>
      </clipPath>
    </defs>
  </Svg>
)
