import React from 'react'
import { RFC, twMerge } from '../'

type TableHeaderCellProps = {
  left?: boolean
  right?: boolean
  first?: boolean
  last?: boolean
  textClassName?: string
}

export const TableHeaderCell: RFC<TableHeaderCellProps> = ({
  children,
  className,
  textClassName,
  left,
  right,
  first,
  last,
  ...props
}) => {
  return (
    <th
      className={twMerge(
        'border-b border-slate-200 bg-slate-100 px-3 py-4 text-start dark:border-gray-600 dark:bg-gray-800',
        first ? 'pl-6' : '',
        last ? 'pr-6' : '',
        className
      )}
      {...props}
    >
      <p
        className={twMerge(
          'relative inline-flex w-full items-center gap-1 whitespace-nowrap font-semibold',
          left && !right ? 'justify-start text-left' : '',
          right ? 'justify-end text-right' : '',
          textClassName,
          'text-gray-700'
        )}
      >
        {children}
      </p>
    </th>
  )
}
