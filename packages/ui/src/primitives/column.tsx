import React from 'react'
import { twMerge } from '../lib'

type ColumnProps = React.HTMLProps<HTMLDivElement> & {
  className?: string
  children: React.ReactNode
}

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={twMerge('flex w-full flex-col items-start', className)}
      >
        {children}
      </div>
    )
  }
)
