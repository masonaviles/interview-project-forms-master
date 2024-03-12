import { RFC } from '@center-inc/common-web'
import { twMerge } from '../../'

type LinkGroupProps = {
  title: string
  items: Array<{ href: string; name: string; target?: string }>
}

export const LinkGroup: RFC<LinkGroupProps> = ({
  items,
  title,
  className,
  ...props
}) => (
  <ul className={twMerge('flex flex-1 flex-col justify-center', className)} {...props}>
    <li className="mb-2 text-sm font-bold">
      <p className="!text-[#AEB3C3] text-base">{title}</p>
    </li>
    {items.map(({ href, name, target }, idx) => (
      <li key={idx}>
        <a href={href} target={target}>
          <p className="mt-[30px] !text-[#787C88] text-base">{name}</p>
        </a>
      </li>
    ))}
  </ul>
)
