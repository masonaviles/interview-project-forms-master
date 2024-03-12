'use client'

import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { RFC } from '@center-inc/common-web'

export const TabsDemo: RFC = ({
  className = undefined,
  children = undefined,
  ...props
}) => {
  return (
    <div className={clsx(className)} {...props}>
      <Tabs.Root
        className={clsx('flex flex-col shadow-sm', className)}
        {...props}
        defaultValue="tab1"
      >
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab1"
          >
            Account
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab2"
          >
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab1"
        >
          first
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          second
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}
