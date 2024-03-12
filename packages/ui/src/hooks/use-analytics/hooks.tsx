import React from 'react'
import { AnalyticsContext } from './context'
import { getUtmParamsFromStorage } from './utils'

type StringReturningFunc = (v: any) => string

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.error(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = <T extends string | StringReturningFunc>(value: T): void => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore: string =
        typeof value === 'function' ? value(storedValue) : value
      // Save state
      // @ts-ignore
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error)
    }
  }
  return [storedValue, setValue] as const
}

export const useAnalyticsWriteKey = (): [string, (value: string) => void] => {
  const [key, setKey] = useLocalStorage(
    'segment_playground_write_key',
    process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY || ''
  )
  if (!key) {
    console.warn('[useAnalyticsWriteKey] key is not set')
    return ['unset', setKey]
  }

  return [key, setKey]
}

export const useCDNUrl = () =>
  useLocalStorage('segment_playground_cdn_url', 'https://cdn.segment.com')

export const useUTMParams = () => {
  return React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return getUtmParamsFromStorage(localStorage)
    }
  }, [])
}

export const useAnalytics = () => {
  const result = React.useContext(AnalyticsContext)

  if (!result) {
    throw new Error('useAnalytics must be used within a AnalyticsProvider')
  }

  return result
}

export function useAnalyticsTrack<T extends string>() {
  const { analytics } = useAnalytics()

  const track = React.useCallback(
    (eventType: T, props?: any | undefined) => {
      if (!analytics) return
      return analytics.track(eventType as string, props)
    },
    [analytics?.track]
  )

  return track
}
