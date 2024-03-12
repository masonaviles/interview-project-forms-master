import qs from 'qs'

const isDev = process.env.NODE_ENV === 'development'
export const DocsWebBase = isDev ? 'http://localhost:8043' : 'https://docs.center.app'
export const MarketingWebBase = isDev ? 'http://localhost:8043' : 'https://center.app'
export const DashboardWebBase = isDev
  ? 'http://localhost:8041'
  : 'https://dashboard.center.app'
export const ExploreWebBase = isDev
  ? 'http://localhost:8045'
  : 'https://explorer.center.app'
export const PRICING_PAGE = 'pricing'
export const EMBED_IN_YOUR_APP = 'embedinyourapp'

function addUrlParams(url: string, params: object) {
  return url + `?${qs.stringify(params)}`
}

export const ApiDocsURLs = {
  apiV2Announcement: 'https://docs.center.dev/reference/what-is-the-center-api-v2',
  computeUnits: 'https://docs.center.dev/reference/compute-units',
  index: 'https://docs.center.dev',
  nftMetadata: 'https://docs.center.dev/reference/shownftmetadata-v2',
  nftsOwnedByAddress: 'https://docs.center.dev/reference/listnftsownedbyaddress-v2',
  renderNFTMediaV2: 'https://docs.center.dev/reference/rendernftmedia-v2',
  supportedChains: 'https://docs.center.dev/reference/chains',
  assetRarityEndpoint: 'https://docs.center.dev/reference/getassetrarity',
  searchEndpoint: 'https://docs.center.dev/reference/search-v2',
  collectionDataEndpoint: 'https://docs.center.dev/reference/getcollection',
  collectionMetadata: 'https://docs.center.dev/reference/getcollectionmetadata-v2',
  marketDataEndpoint: 'https://docs.center.dev/reference/nft-market-data',
  changeLogRSS: 'https://docs.center.dev/changelog.rss',
  collectionMarketCap:
    'https://docs.center.dev/reference/shownftcollectionmarketcap-v2',
  collectionFloor: 'https://docs.center.dev/reference/getcollectionfloor-v2',
  tradingVolume: 'https://docs.center.dev/reference/getcollectionvolume',
}

export const OtherURLs = {
  calendlyFeatureRequest:
    'https://calendly.com/matt-center/center-intro-feature-request',
  twitter: 'https://twitter.com/centerapp',
}

export const ApiUrls = {
  checkoutSession: {
    detail: (sessionId: string) => `/checkout_sessions/${sessionId}`,
  },
}

export const WebURLs = {
  about: {
    index: MarketingWebBase + '/about/',
  },
  settings: {
    index: '/settings',
  },
  account: {
    index: '/account/',
    billing: '/account/billing/',
    settings: '/account/settings/',
  },
  auth: {
    signIn: '/login/',
    signUp: '/signup/',
    reset: '/reset/',
  },
  apiDirectory: {
    index: MarketingWebBase + '/directory/',
    slug: (apiSlug: string) => `/directory/${apiSlug}`,
  },
  blog: {
    index: 'https://blog.center.app/',
  },
  changelog: {
    index: MarketingWebBase + '/changelog/',
  },
  customers: {
    index: MarketingWebBase + '/customers/',
  },
  caseStudyUniswap: {
    index: MarketingWebBase + '/customers/uniswap/',
  },
  caseStudyTributeLabs: {
    index: MarketingWebBase + '/customers/tribute-labs/',
  },
  caseStudySoho: {
    index: MarketingWebBase + '/customers/soho/',
  },
  caseStudyAstaria: {
    index: MarketingWebBase + '/customers/astaria/',
  },
  docs: {
    index: DocsWebBase + '/',
    gettingStarted: {
      index: DocsWebBase + '/getting-started/',
      httpApi: DocsWebBase + '/getting-started/http-api/',
      portal: DocsWebBase + '/getting-started/portal-faqs/',
      react: DocsWebBase + '/getting-started/react/',
    },
    react: {
      index: DocsWebBase + '/react/',
      centerProvider: DocsWebBase + '/react/center-provider/',
      assetComponent: DocsWebBase + '/react/asset-component/',
      useAssetHook: DocsWebBase + '/react/use-asset-hook/',
      useCollectionHook: DocsWebBase + '/react/use-collection-hook/',
      useCollectionSearchHook: DocsWebBase + '/react/use-collection-search/',
    },
  },
  landing: {
    index: '/',
  },
  playground: {
    index: MarketingWebBase + '/playground/',
  },
  pricing: {
    index: MarketingWebBase + '/pricing/',
    payment: (planSlug: string) => DashboardWebBase + `/pricing/${planSlug}/payment/`,
    success: (planSlug: string, projectId: string) =>
      addUrlParams(DashboardWebBase + `/pricing/${planSlug}/success/`, { projectId }),
    error: (planSlug: string) => DashboardWebBase + `/pricing/${planSlug}/error/`,
    contact:
      MarketingWebBase +
      `/contact?intent=custom-plan&body=Please%20contact%20me%20about%20setting%20up%20a%20custom%20plan`,
  },
  projects: {
    index: '/',
    new: '/projects/projects/new/',
    show: (projectId: string) => `/projects/${projectId}/`,
    usage: (projectId: string) => `/projects/${projectId}/usage/`,
    plan: (projectId: string) => `/projects/${projectId}/plan/`,
    performance: (projectId: string) => `/projects/${projectId}/performance/`,
    requestLog: (projectId: string) => `/projects/${projectId}/request-log/`,
    quickstart: (projectId: string) => `/projects/${projectId}/start/`,
    apiKeys: {
      index: (projectId: string) => `/projects/${projectId}/api-keys/`,
    },
    team: {
      index: (projectId: string) => `/projects/${projectId}/team/`,
    },
    settings: {
      index: (projectId: string) => `/projects/${projectId}/settings/`,
    },
  },
  search: (query: string) => {
    if (query) {
      return `/search?q=${encodeURIComponent(query)}`
    }
    return `/search`
  },
  onboarding: {
    index: '/onboarding/',
  },
  support: {
    index: '/support/',
  },
  terms: {
    index: MarketingWebBase + '/terms/terms-of-use',
    termsOfService: MarketingWebBase + '/terms/terms-of-use',
    developerTerms: MarketingWebBase + '/terms/developer-terms',
  },
}
