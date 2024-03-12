import { RFC } from '@center-inc/common-web'

export const LoadingIcon: RFC<{ width: number; height: number }> = () => {
  return (
    <div>Loading</div>
    // <Image
    //   {...props}
    //   src="/images/loading-icon.png"
    //   sizes="24px"
    //   className={twMerge('animate-spin-1/2s', className)}
    //   alt="Center logo loading image"
    // />
  )
}
