import { describe, expect, test } from 'vitest'
import { caseInsensitiveGet } from './case-insensitive-get'

describe('caseInsensitiveGet', () => {
  const key = 'foobar'

  test('getTokenFromHeaders should work', () => {
    expect(
      caseInsensitiveGet(
        {
          'X-API-Key': key,
        },
        'X-API-Key'
      )
    ).toEqual(key)
  })

  test('should be case insensitive', () => {
    expect(
      caseInsensitiveGet(
        {
          'x-api-key': key,
        },
        'X-API-Key'
      )
    ).toEqual(key)
  })

  test('should be very case insensitive', () => {
    expect(
      caseInsensitiveGet(
        {
          'x-ApI-KEy': key,
        },
        'X-API-Key'
      )
    ).toEqual(key)
  })
})
