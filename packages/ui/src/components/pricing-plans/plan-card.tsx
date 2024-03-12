import { RFC } from '@center-inc/common-web'
import { clsx, PlanProps } from '../..'

export const PlanCard: RFC<
  Pick<PlanProps, 'name' | 'recommended' | 'slug' | 'price' | 'description'> & {
    handleClick: () => void
    disabled?: boolean
  }
> = ({
  name,
  description,
  children,
  recommended,
  className,
  handleClick,
  disabled,
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded p-8 space-y-4  hover:-translate-y-1 transition-all h-[272px]',
        {
          'border-slate-200 border': !recommended,
          'border-blue-600 border-2': recommended,
        },
        !disabled && 'cursor-pointer',
        className
      )}
      onClick={handleClick}
    >
      <div>
        <div className="text-3xl font-medium">{name}</div>
        <div className="text-slate-500 text-sm max-w-[75%]">{description}</div>
      </div>
      {children}
    </div>
  )
}
