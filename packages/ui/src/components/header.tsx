import React from 'react'
import { LogoSmall, twMerge, ZIndex } from '../'

export type HeaderProps = {
  children?: React.ReactNode
  className?: string
  middleContent?: React.ReactNode
  rightContent?: React.ReactNode
  containerClassName?: string
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ middleContent, rightContent, children, className, containerClassName }, ref) => {
    return (
      <header
        className={twMerge(
          'min-h-13 fixed left-0 right-0 top-0 flex !w-screen border-b py-4',
          'border-black/10 bg-white dark:border-gray-800 dark:bg-gray-900',
          'page-wrapper',
          ZIndex.NAVBAR,
          className
        )}
        ref={ref}
      >
        <div className={twMerge('page-inner-wrapper-row', containerClassName)}>
          {children ? (
            children
          ) : (
            <>
              <div className="flex items-center justify-between gap-4">
                <a href="/">
                  <LogoSmall className="mb-0 select-none" />
                </a>
                {middleContent}
                {rightContent}
              </div>
            </>
          )}
        </div>
      </header>
    )
  }
)
