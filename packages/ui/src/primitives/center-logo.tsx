import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'
import { CenterWordmark, Column, Row, Svg, SvgProps } from '.'
import { twJoin, twMerge } from '../'

export const CenterLogo: RFC<SvgProps> = ({ className }) => {
  return (
    <Svg fill="none" viewBox="0 0 54 54" className={clsx(className)}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M53.176 25.554a3 3 0 010 2.296l-6.942 16.76a3 3 0 01-1.624 1.624l-16.76 6.942a3 3 0 01-2.296 0l-16.76-6.942a3 3 0 01-1.623-1.624L.228 27.85a3 3 0 010-2.296l6.943-16.76a3 3 0 011.623-1.623L25.554.228a3 3 0 012.296 0l16.76 6.943a3 3 0 011.624 1.623l6.942 16.76zM7.944 28.971a3 3 0 010-4.47l3.147-2.817a3 3 0 00.995-2.401l-.234-4.217a3 3 0 013.161-3.161l4.218.233a3 3 0 002.4-.995l2.818-3.147a3 3 0 014.47 0l2.817 3.147a3 3 0 002.401.995l4.217-.233a3 3 0 013.161 3.16l-.233 4.218a3 3 0 00.995 2.4l3.147 2.818a3 3 0 010 4.47l-3.147 2.817a3 3 0 00-.995 2.401l.233 4.218a3 3 0 01-3.16 3.16l-4.218-.233a3 3 0 00-2.4.995l-2.818 3.147a3 3 0 01-4.47 0l-2.818-3.147a3 3 0 00-2.4-.995l-4.218.234a3 3 0 01-3.16-3.161l.233-4.218a3 3 0 00-.995-2.4L7.944 28.97zM13.4 26.74c0-.34.115-.638.345-.894.23-.255.528-.417.895-.485a48.334 48.334 0 003.679-.677c1.03-.23 1.903-.507 2.618-.83.716-.324 1.312-.725 1.789-1.201.485-.477.881-1.07 1.188-1.776.306-.707.566-1.563.78-2.568.212-.996.412-2.184.6-3.564a1.49 1.49 0 01.46-.92 1.33 1.33 0 01.92-.357c.357 0 .663.119.919.357.264.247.422.558.473.933.187 1.652.404 3.04.651 4.164.256 1.133.6 2.066 1.035 2.798a5.173 5.173 0 001.788 1.776c.75.451 1.704.817 2.862 1.098 1.166.281 2.602.537 4.305.767.366.06.664.217.894.473.23.255.345.557.345.907 0 .349-.115.647-.345.894a1.428 1.428 0 01-.881.472c-1.704.264-3.134.541-4.293.83-1.158.29-2.108.656-2.848 1.1a5.25 5.25 0 00-1.776 1.762c-.434.733-.784 1.66-1.048 2.785-.255 1.124-.485 2.508-.69 4.152a1.453 1.453 0 01-.472.907c-.256.247-.562.37-.92.37-.349 0-.656-.123-.92-.37a1.44 1.44 0 01-.46-.907c-.187-1.652-.408-3.045-.664-4.178-.247-1.132-.592-2.065-1.035-2.797a5.175 5.175 0 00-1.788-1.776c-.74-.451-1.695-.817-2.861-1.098-1.159-.281-2.59-.541-4.293-.78a1.426 1.426 0 01-.894-.46 1.285 1.285 0 01-.358-.907zm11.908-2.303a2 2 0 012.828 0l.926.925a2 2 0 010 2.829l-.926.925a2 2 0 01-2.828 0l-.926-.925a2 2 0 010-2.829l.926-.925z"
        clipRule="evenodd"
      ></path>
    </Svg>
  )
}

export const NavbarLogoAndWordmark: RFC<{
  containerClassName?: string
  className?: string
  imageProps?: { unoptimized?: boolean; src?: string }
  noText?: boolean
  textClassName?: string
}> = ({ containerClassName, className, noText, textClassName }) => (
  <Row className={twMerge('gap-2', containerClassName)}>
    <CenterLogo
      className={twMerge('h-7 w-7 fill-gray-900 dark:fill-gray-100', className)}
    />
    {noText ? null : (
      <CenterWordmark
        className={twMerge('fill-gray-900 dark:fill-gray-100', textClassName)}
      />
    )}
  </Row>
)

export const LogoSmall: RFC<{
  containerClassName?: string
  className?: string
  noText?: boolean
  textClassName?: string
}> = ({ containerClassName, className, textClassName, noText }) => (
  <Column className={twMerge('items-center gap-4', containerClassName)}>
    <CenterLogo
      className={twJoin('h-8 w-8 fill-gray-900 dark:fill-gray-100', className)}
    />
    {noText ? null : (
      <CenterWordmark
        className={twMerge('fill-gray-900 dark:fill-gray-100', textClassName)}
      />
    )}
  </Column>
)

export const LogoLarge: RFC<{
  containerClassName?: string
  className?: string
  noText?: boolean
  textClassName?: string
}> = ({ containerClassName, className, textClassName, noText }) => (
  <Column className={twMerge('items-center gap-4', containerClassName)}>
    <CenterLogo
      className={twJoin('h-12 w-12 fill-gray-900 dark:fill-gray-100', className)}
    />
    {noText ? null : (
      <CenterWordmark
        className={twMerge('w-30 h-5 fill-gray-900 dark:fill-gray-100', textClassName)}
      />
    )}
  </Column>
)
