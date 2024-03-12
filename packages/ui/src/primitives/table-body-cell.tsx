import { RFC, twMerge } from '../'

type TableBodyCellProps = {
  left?: boolean
  right?: boolean
  first?: boolean
  last?: boolean
  textClassName?: string
}

export const TableBodyCell: RFC<TableBodyCellProps> = ({
  children,
  className,
  textClassName,
  left,
  right,
  first,
  last,
}) => {
  return (
    <td
      className={twMerge(
        'p-3',
        first ? 'pl-6' : '',
        last ? 'pr-6' : '',
        left ? 'text-left' : '',
        right ? 'text-right' : '',
        className
      )}
    >
      <div
        className={twMerge(
          // 'line-clamp-1',
          left && !right ? 'text-left' : '',
          right ? 'text-right' : '',
          textClassName,
          'text-gray-900'
        )}
      >
        {children}
      </div>
    </td>
  )
}
