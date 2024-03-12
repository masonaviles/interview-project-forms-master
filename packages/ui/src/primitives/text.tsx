import React from 'react'
import { RFC } from '@center-inc/common-web'

export const Text: RFC = ({ children, ...props }) => {
  return <p {...props}>{children}</p>
}
