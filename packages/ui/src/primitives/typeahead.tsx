import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'

const ResultsContainer: RFC = ({ children, className, ...props }) => (
  <div
    className={clsx(
      'absolute no-width-scrollbar z-50 max-h-60 w-full overflow-y-scroll rounded bg-white shadow-md',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

const ResultItem: RFC<{ active: boolean; selected: boolean }> = ({
  className = undefined,
  active = false,
  selected = false,
  children,
  ...props
}) => (
  <div
    className={clsx(
      'flex text-base cursor-pointer select-none items-center space-x-2 border-b border-slate-100 px-2 py-1',
      active && 'bg-blue-600 text-white shadow-inner dark:bg-slate-700/60',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export const Typeahead = {
  ResultsContainer,
  ResultItem,
}
