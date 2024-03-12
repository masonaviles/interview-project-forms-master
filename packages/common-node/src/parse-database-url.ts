import querystring from 'querystring'
import url from 'url'

type DBCredentials = {
  user: string
  host: string
  port: number
  password: string
  database: string
  schema: string
}

export function parseDatabaseUrl(databaseUrl: string) {
  const parsedUrl = url.parse(databaseUrl, false, true)

  // Query parameters end up directly in the configuration.
  const config = querystring.parse(parsedUrl.query || '')

  config.driver = (parsedUrl.protocol || 'sqlite3:')
    // The protocol coming from url.parse() has a trailing :
    .replace(/\:$/, '')

  // Cloud Foundry will sometimes set a 'mysql2' scheme instead of 'mysql'.
  if (config.driver == 'mysql2') config.driver = 'mysql'

  // url.parse() produces an "auth" that looks like "user:password". No
  // individual fields, unfortunately.
  if (parsedUrl.auth) {
    const userPassword = parsedUrl.auth.split(':', 2)
    config.user = userPassword[0]
    if (userPassword.length > 1) {
      config.password = userPassword[1]
    }
  }

  // Some drivers (e.g., redis) don't have database names.
  if (parsedUrl.pathname) {
    config.database = parsedUrl.pathname.replace(/^\//, '').replace(/\/$/, '')
  }

  if (parsedUrl.hostname) config.host = parsedUrl.hostname
  if (parsedUrl.port) config.port = parsedUrl.port

  // @ts-expect-error for now
  return config as DBCredentials
}
