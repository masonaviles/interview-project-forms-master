import React from 'react'
import { RFC } from '@center-inc/common-web'

export const SocialMediaButton: RFC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="flex flex-row items-center justify-center rounded-lg bg-[rgb(45,48,55)] p-2 transition-colors hover:bg-[rgb(50,53,61)]">
    {icon}
  </div>
)
