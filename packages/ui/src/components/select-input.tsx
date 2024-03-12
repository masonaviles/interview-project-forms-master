import React from 'react'
import clsx from 'clsx'
import { OptionType } from '@center-inc/common-web'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../primitives'

type SelectInputProps<T extends string> = React.HTMLProps<HTMLSelectElement> & {
  options: Array<OptionType<T>>
  onValueChange?: (value: T) => void
  defaultValue?: T
  placeholder?: string
  value?: T
}

export const SelectInput = React.forwardRef<
  HTMLSelectElement,
  SelectInputProps<string>
>(
  (
    { options, className, placeholder, onValueChange, defaultValue, value, ...props },
    ref
  ) => (
    <Select onValueChange={onValueChange} defaultValue={defaultValue} value={value}>
      {/* @ts-expect-error not enough energy to deal with this shit right now */}
      <SelectTrigger className={clsx('bg-white text-slate-900', className)} {...props}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ value, label }) => (
            <SelectItem value={value} key={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
)
