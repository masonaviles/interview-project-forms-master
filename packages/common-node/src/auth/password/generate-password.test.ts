import { describe, expect, it } from 'vitest'
import { saltAndHashPlaintextPassword, verifyPassword } from './generate-password'
import { identifyHasher } from './get-hasher'
import {
  BCrypt_SHA256_PasswordHasher,
  BCryptPasswordHasher,
  PBKDF2_SHA1_PasswordHasher,
  PBKDF2_SHA256_PasswordHasher,
} from './hashers'

describe('password creation', () => {
  describe(saltAndHashPlaintextPassword, () => {
    it('hashes', async () => {
      const hashedPassword = await saltAndHashPlaintextPassword({ plaintext: 'foobar' })
      expect(hashedPassword).toContain('pbkdf2_sha256')

      expect(
        await verifyPassword({ plaintext: 'foobar', hashed: hashedPassword })
      ).toBe(true)
      expect(
        await verifyPassword({ plaintext: 'not-foobar', hashed: hashedPassword })
      ).toBe(false)
    })
  })

  describe(identifyHasher, () => {
    it('detects bcrypt-sha256', async () => {
      const pw = new BCrypt_SHA256_PasswordHasher()
      expect(identifyHasher(await pw.encode('foobar'))).toEqual('bcrypt_sha256')
      expect(
        await verifyPassword({ plaintext: 'foobar', hashed: await pw.encode('foobar') })
      ).toBe(true)
    })

    it('detects bcrypt', async () => {
      const pw = new BCryptPasswordHasher()
      expect(identifyHasher(await pw.encode('foobar'))).toEqual('bcrypt')
      expect(
        await verifyPassword({ plaintext: 'foobar', hashed: await pw.encode('foobar') })
      ).toBe(true)
    })

    it('detects pbkdf2-sha1', async () => {
      const pw = new PBKDF2_SHA1_PasswordHasher()
      expect(identifyHasher(await pw.encode('foobar'))).toEqual('pbkdf2_sha1')
      expect(
        await verifyPassword({ plaintext: 'foobar', hashed: await pw.encode('foobar') })
      ).toBe(true)
    })

    it('detects pbkdf2-sha256', async () => {
      const pw = new PBKDF2_SHA256_PasswordHasher()
      expect(identifyHasher(await pw.encode('foobar'))).toEqual('pbkdf2_sha256')
      expect(
        await verifyPassword({ plaintext: 'foobar', hashed: await pw.encode('foobar') })
      ).toBe(true)
    })
  })
})
