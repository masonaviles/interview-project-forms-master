import { describe, expect, test } from 'vitest'
import { getAuthCookieName, getTokenFromHeaders } from './auth-token'

describe(getTokenFromHeaders, () => {
  test('when token is present', () => {
    const headers = {
      foo: 'bar',
      authorization: 'Bearer 0xabc ',
    }
    // Test code goes here
    expect(getTokenFromHeaders(headers)).toEqual('0xabc')
  })
})

describe(getAuthCookieName, () => {
  test('getting it', () => {
    expect(getAuthCookieName()).toEqual('__Secure-next-auth.session-token')
  })
})
