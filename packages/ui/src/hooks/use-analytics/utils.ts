import { UTM_PARAMS } from './constants'
import { UTMParams } from './context'

export const getUTMParamsFromUrl = (
  query: Record<string, string | string[]>
): UTMParams => {
  const params: UTMParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ].reduce((acc, param) => {
    if (query[param]) {
      // eslint-disable-next-line
      // @ts-ignore
      acc[param] = query[param]
    }
    return acc
  }, {})
  return params
}

export const getUtmParamsFromStorage = (localStorage: Storage): UTMParams => {
  const result = localStorage.getItem(UTM_PARAMS)
  if (result) {
    try {
      return JSON.parse(result)
    } catch {
      return {}
    }
  }
  return {}
}

export const setUtmParams = (params: UTMParams) => {
  localStorage.setItem(UTM_PARAMS, JSON.stringify(params))
}
