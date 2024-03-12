import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../lib'

const buttonVariants = cva(
  'inline-flex items-center justify-center hover:shadow-sm active:shadow-inner whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ease-in-out',
  {
    variants: {
      variant: {
        default:
          'bg-gray-800 shadow-sm hover:shadow active:shadow-inner text-white hover:bg-slate-800/90 active:bg-slate-900',
        white: 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50',
        blue: 'bg-blue-600 text-white hover:bg-blue-600/80',
        destructive: 'bg-red-500 text-white hover:bg-red-500/80',
        outline: 'bg-white border border-slate-200 text-slate-900 hover:bg-slate-50',
        secondary:
          'bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        green: 'bg-green-500 hover:bg-green-500/80 active:bg-green-600 text-white',
        indigo:
          'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2',
        link: 'text-slate-900 underline-offset-4 hover:underline',
        disabled: 'bg-white border border-slate-400 text-slate-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  label?: string | React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    if (props.label) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {props.label}
        </Comp>
      )
    } else {
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
