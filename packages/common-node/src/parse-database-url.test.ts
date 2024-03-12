import { describe, expect, it } from 'vitest'
import { parseDatabaseUrl } from './parse-database-url'

const cases = [
  {
    desc: 'PostgreSQL URL with username/password',
    url: 'postgres://pwnall:sekret@localhost/pwnbase',
    config: {
      driver: 'postgres',
      user: 'pwnall',
      password: 'sekret',
      host: 'localhost',
      database: 'pwnbase',
    },
  },
]

describe(parseDatabaseUrl, () => {
  cases.forEach(({ desc, url, config }) => {
    it(desc, () => {
      expect(parseDatabaseUrl(url)).toEqual(config)
    })
  })
})
