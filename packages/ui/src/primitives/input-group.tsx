import React from 'react'
import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'
import { Label } from './label'
import { Text } from './text'

interface InputGroupProps {
  label?: string
  description?: React.ReactNode | string
}

export const InputGroup: RFC<InputGroupProps> = ({
  label,
  className,
  children,
  description,
}) => (
  <div className={clsx('space-y-1', className)}>
    {label && <Label>{label}</Label>}

    <div>{children}</div>
    {description ?? <Text>{description}</Text>}
  </div>
)
// <FormItem className={className}>
//   {label ?? <FormLabel>{label}</FormLabel>}
//   <FormControl>{children}</FormControl>
//   {description ?? <FormDescription>{description}</FormDescription>}
// </FormItem>
