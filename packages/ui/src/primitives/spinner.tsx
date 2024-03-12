import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'

export const Spinner: RFC<{ alt?: string }> = ({ className, alt = 'Loading' }) => (
  <div
    className={clsx(
      'inline-block h-4 w-4 animate-[spin_0.40s_linear_infinite] rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
      className
    )}
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      {alt}
    </span>
  </div>
)
