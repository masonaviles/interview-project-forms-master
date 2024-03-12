import jwt from 'jsonwebtoken'
import { describe, expect, test } from 'vitest'
import { createAuthToken, createSignedToken, decodeJWT } from './jwt'

describe(createAuthToken, () => {
  const email = 'user@example.com'
  test('happy path', () => {
    const params = {
      email,
      user: {
        foo: 'bar',
        id: '123',
        email,
      },
    }
    expect(createAuthToken(params)).toEqual(
      expect.objectContaining({
        email,
        user: {
          id: params.user.id,
          email: params.user.email,
        },
      })
    )
  })
})

describe('encode/decode', () => {
  const secretKey =
    '17a70c4a0d18f6e1eb01ed870c70afd64d1d28cb6442a41968f97df004bf27017da0b96e40b6502e909d78b372f486e2f31b70a9d31061dcfb4d69eb8e7723a6'
  describe('encode', () => {
    test('Should fail if supplied an invalid payload', () => {
      expect(() =>
        createSignedToken(
          {
            // @ts-expect-error intentional
            user: {
              // id: '123',
              email: 'user@example.com',
            },
          },
          secretKey
        )
      ).toThrowError()

      expect(() =>
        createSignedToken(
          {
            // @ts-expect-error intentional
            user: {
              id: '123',
              // email: 'user@example.com',
            },
          },
          secretKey
        )
      ).toThrowError()
    })
  })

  describe('decode', () => {
    test('Should fail if the contents are invalid', () => {
      const dummyToken = jwt.sign({}, secretKey)
      expect(() => decodeJWT(dummyToken, secretKey)).toThrowError()
    })
  })
})
