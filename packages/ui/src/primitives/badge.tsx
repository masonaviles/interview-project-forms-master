import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { RFC } from '@center-inc/common-web'
import { cn } from '../lib'

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-900/80',
        secondary:
          'border-transparent bg-slate-200 text-slate-900 hover:bg-slate-200/80',
        destructive: 'border-transparent bg-red-500 text-white hover:bg-destructive/80',
        outline: 'text-slate-900 border-slate-200 hover:bg-slate-200/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge: RFC<VariantProps<typeof badgeVariants>> = ({
  className,
  variant,
  ...props
}) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { badgeVariants }
