import React from 'react'
import { RFC } from '@center-inc/common-web'
import { twMerge } from '../lib'

type SkeletonProps = {
  loading?: boolean
}

export const Skeleton: RFC<SkeletonProps> = ({ className, loading, children }) => {
  if (loading) {
    return (
      <div
        className={twMerge(
          'h-6 w-full animate-pulse rounded-md bg-slate-200 duration-75 dark:bg-slate-700',
          className
        )}
      />
    )
  }

  if (children && typeof children === 'string') return <span>children</span>

  return null
}
