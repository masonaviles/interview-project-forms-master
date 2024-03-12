import React from 'react'
import ReactDOM from 'react-dom'
import {
  disableDocumentEvents,
  enableDocumentEvents,
  RFC,
  twJoin,
  twMerge,
  X,
  ZIndex,
} from '../'

type DrawerProps = {
  open?: boolean
  right?: boolean
  onClose?: () => void
  hideCloseButton?: boolean
  containerClassName?: string
  overlayClassName?: string
}

export const Drawer: RFC<DrawerProps> = ({
  open,
  children,
  className,
  containerClassName,
  hideCloseButton,
  overlayClassName,
  right,
  onClose,
}) => {
  const [render, setRender] = React.useState(false)

  React.useEffect(() => {
    if (open) {
      disableDocumentEvents()
    } else {
      enableDocumentEvents()
    }

    return enableDocumentEvents
  }, [open])

  React.useEffect(() => {
    setRender(true)
  }, [])

  if (typeof window === 'object' && render) {
    return ReactDOM.createPortal(
      <React.Fragment>
        <div
          className={twJoin(
            'pointer-events-auto fixed h-screen w-screen overflow-hidden border-r-0 border-gray-400 bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:shadow-lg md:w-80 md:border-r',
            open ? 'fixed top-0' : 'hidden',
            open && right && 'right-0 border-l',
            open && !right && 'left-0 border-r',
            ZIndex.DRAWER,
            containerClassName
          )}
        >
          <div
            className={twMerge(
              'relative h-full w-full overflow-auto p-4 py-16 pb-6',
              className
            )}
          >
            {hideCloseButton ? null : (
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-20 inline-flex items-center rounded-lg"
              >
                <X className="h-6 w-6 stroke-gray-700 dark:stroke-gray-300" />
                <span className="sr-only">Close drawer</span>
              </button>
            )}
            {children}
          </div>
        </div>
        <div
          onClick={onClose}
          className={twJoin(
            'pointer-events-auto inset-0 bg-white/60 dark:bg-black/60',
            open ? 'fixed' : 'hidden',
            ZIndex.DRAWER_OVERLAY,
            overlayClassName
          )}
        />
      </React.Fragment>,
      document?.body
    )
  }

  return null
}
