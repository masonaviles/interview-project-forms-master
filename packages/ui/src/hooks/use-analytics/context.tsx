import React from 'react'
import { AnalyticsBrowser } from '@segment/analytics-next'

export type UTMParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export const AnalyticsContext = React.createContext<{
  analytics: AnalyticsBrowser | undefined
  writeKey: string | undefined
  cdnURL: string
  setWriteKey?: (key: string) => void
  setCDNUrl?: (url: string) => void
}>({
  analytics: undefined,
  writeKey: '',
  cdnURL: '',
  setWriteKey: undefined,
  setCDNUrl: undefined,
})
