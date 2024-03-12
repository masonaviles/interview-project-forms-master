'use client'

import React from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { RFC } from '@center-inc/common-web'
import { Row, Text, twJoin, twMerge, X, ZIndex } from '../'

interface DialogSubComponents {
  Title: RFC
  Content: RFC
  Description: RFC
}

export type DialogProps = {
  containerClassName?: string
  contentClassName?: string
  open?: boolean
  noCloseButton?: boolean
  setOpen?: (state: boolean) => void
  onClose?: (() => void) | null
}

/**
 * This component is now deprecated. Please use the DialogUI component instead.
 */
export const Dialog: RFC<DialogProps> & DialogSubComponents = ({
  children,
  open = false,
  setOpen,
  containerClassName,
  contentClassName,
  noCloseButton,
  ...props
}) => {
  const handleClose = () => {
    if (props.onClose === null) return
    setOpen?.(false)
  }

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen} {...props}>
      {open && (
        <RadixDialog.Portal forceMount>
          <RadixDialog.Overlay
            className={twJoin(
              'fixed inset-0 w-screen bg-gray-900/30 backdrop-blur dark:bg-gray-900/60',
              ZIndex.DIALOG_OVERLAY
            )}
          />
          <Content
            xTheme="light"
            onClose={handleClose}
            className={contentClassName}
            containerClassName={containerClassName}
            noCloseButton={noCloseButton}
          >
            {children}
          </Content>
        </RadixDialog.Portal>
      )}
    </RadixDialog.Root>
  )
}

const Title: RFC = ({ children, className }) => (
  <Text className={twMerge('text-start font-medium text-lg', className)}>
    {children}
  </Text>
)

const Description: RFC = ({ children, className }) => (
  <Text className={twMerge('text-start text-gray-700', className)}>{children}</Text>
)

type ContentProps = {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  onClose?: () => void
  noCloseButton?: boolean
  xTheme: 'light' | 'dark'
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  (
    { children, className, containerClassName, onClose, noCloseButton, xTheme },
    ref
  ) => {
    return (
      <Row
        className={twMerge(
          'fixed inset-0 top-8 w-screen items-end justify-center overflow-y-auto sm:inset-0 sm:top-0 sm:items-center',
          ZIndex.DIALOG,
          containerClassName
        )}
      >
        <RadixDialog.Content
          asChild
          ref={ref}
          className={twMerge(
            'relative rounded-2xl md:rounded-lg',
            'h-full max-h-full w-full overflow-auto sm:h-auto sm:max-w-lg',
            'inline-flex flex-col items-start justify-start gap-4',
            'border border-gray-300 dark:border-gray-700',
            'bg-slate-50 dark:bg-gray-800',
            'px-4 py-6 sm:px-16 sm:py-12',
            'shadow-lg dark:shadow-sm',
            ZIndex.DIALOG,
            className
          )}
        >
          <div>
            {noCloseButton ? null : (
              <button className="absolute right-4 top-4" onClick={onClose}>
                <X
                  width={26}
                  height={26}
                  className={xTheme ? 'stroke-slate-500' : 'stroke-white'}
                />
              </button>
            )}
            {children}
          </div>
        </RadixDialog.Content>
      </Row>
    )
  }
)

// @ts-ignore what
Dialog.Content = Content
Dialog.Title = Title
Dialog.Description = Description
