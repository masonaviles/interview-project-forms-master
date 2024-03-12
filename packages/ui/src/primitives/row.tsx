import React from 'react'
import { twMerge } from '..'

export const Row = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement> & {
    className?: string
    children?: React.ReactNode
  }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        'flex w-full flex-row items-center justify-between',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
