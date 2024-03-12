/**
 * This is here and not in auth.ts so that it can be imported
 * by dashboard-web.
 */

export function extractToken(value: string) {
  return value.replace(/bearer /i, '').trim()
}

export function getTokenFromHeaders(headers: Record<string, string>) {
  // TODO: make sure it's case-insensitive.
  const tokenWithAuthorizationPrefix = headers['authorization']
  if (tokenWithAuthorizationPrefix) {
    return extractToken(tokenWithAuthorizationPrefix)
  }
}

/**
 * We'd previously have to vary cookie names in prod vs local because of
 * nextauth. Now that we run nginx locally we always use secure cookies.
 */
export function getAuthCookieName() {
  const securePrefix = `__Secure`
  const baseCookieName = 'next-auth.session-token'
  return `${securePrefix}-${baseCookieName}` as const
}
