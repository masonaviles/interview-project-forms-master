import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'

export const Masthead: RFC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={clsx('space-y-4 max-w-lg py-16 mx-auto text-center', className)}>
      <div className="text-3xl text-black">{title}</div>
      <div className="text-xl  text-slate-500">{subtitle}</div>
    </div>
  )
}
