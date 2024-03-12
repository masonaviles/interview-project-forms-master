'use client'

import * as React from 'react'
import clsx from 'clsx'
import { Check, ChevronsUpDown } from 'lucide-react'
import { RFC } from '@center-inc/common-web'
import { cn } from '../lib/utils'
import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command'
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from './popover'

export const Combobox: RFC<{
  placeholder?: string
  emptyText?: string
  options: Array<{ label: string; value: string }>
}> = ({
  options = [],
  className,
  placeholder = 'Select an Item',
  emptyText = 'Empty',
}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx('w-full justify-between', className)}
        >
          {value
            ? options.find((framework) => framework.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent className={clsx('w-full p-0')}>
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  )
}
