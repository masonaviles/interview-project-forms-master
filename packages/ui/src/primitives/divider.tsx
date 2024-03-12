import { HTMLAttributes } from 'react'
import { RFC } from '@center-inc/common-web'
import { twMerge } from '../lib'

export const Divider: RFC<HTMLAttributes<HTMLDivElement> & { hidden?: boolean }> = ({
  hidden,
  className,
  ...props
}) => (
  <div
    {...props}
    className={twMerge(
      'mx-16 my-16 h-[1px] max-w-full md:mx-24 lg:mx-32',
      hidden ? 'opacity-0' : '',
      className
    )}
  />
)
