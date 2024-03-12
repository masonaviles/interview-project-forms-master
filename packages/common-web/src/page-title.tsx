const defaultTitleSuffix = 'Center API - Blockchain & Web3 Developer Tools'

export const toFullPageTitle = (
  pageTitle: string | undefined,
  params: {
    includeSuffix: boolean
  } = {
    includeSuffix: true,
  }
): string => {
  if (!pageTitle || pageTitle === '') {
    return defaultTitleSuffix
  }

  if (params.includeSuffix) {
    return `${pageTitle} | ${defaultTitleSuffix}`
  }
  return pageTitle
}
