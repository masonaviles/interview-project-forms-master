import { RFC } from '@center-inc/common-web'
import { Svg, SvgProps } from '../../primitives'

export const Solana: RFC<SvgProps> = (props) => (
  <Svg width="24" height="24" fill="none" viewBox="0 0 32 31" {...props}>
    <path
      fill="url(#paint0_linear_558_2181)"
      d="M30.965 23.294L25.97 28.65a1.154 1.154 0 01-.845.37H1.449a.58.58 0 01-.425-.976l4.989-5.355a1.154 1.154 0 01.845-.37h23.675a.578.578 0 01.432.976zM25.97 12.508a1.166 1.166 0 00-.845-.37H1.449a.58.58 0 00-.425.976l4.989 5.358a1.167 1.167 0 00.845.369h23.675a.581.581 0 00.423-.975l-4.986-5.358zM1.45 8.66h23.675a1.155 1.155 0 00.845-.37l4.995-5.355a.58.58 0 00-.432-.975H6.858a1.156 1.156 0 00-.845.37l-4.99 5.354a.58.58 0 00.426.976z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_558_2181"
        x1="3.422"
        x2="28.247"
        y1="29.664"
        y2="1.676"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.08" stopColor="#9945FF"></stop>
        <stop offset="0.3" stopColor="#8752F3"></stop>
        <stop offset="0.5" stopColor="#5497D5"></stop>
        <stop offset="0.6" stopColor="#43B4CA"></stop>
        <stop offset="0.72" stopColor="#28E0B9"></stop>
        <stop offset="0.97" stopColor="#19FB9B"></stop>
      </linearGradient>
    </defs>
  </Svg>
)
