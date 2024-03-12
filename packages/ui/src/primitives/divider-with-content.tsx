import { RFC, twMerge } from '../'

export const DividerWithContent: RFC<{
  borderClassName: string
}> = ({ children, className, borderClassName, ...props }) => (
  <div className={twMerge('relative', className)} {...props}>
    <div className="absolute inset-0 flex items-center">
      <div
        className={twMerge(
          'w-full border-t border-dashed border-gray-300 dark:border-gray-700',
          borderClassName
        )}
      />
    </div>
    <div className="relative mx-4 flex justify-center">{children}</div>
  </div>
)
