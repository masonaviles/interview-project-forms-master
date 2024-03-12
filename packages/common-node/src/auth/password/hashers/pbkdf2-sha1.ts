import crypto from 'crypto'
import { IPasswordHasher } from './types'

export class PBKDF2_SHA1_PasswordHasher implements IPasswordHasher {
  algorithm = 'pbkdf2_sha1'
  iterations = 120000
  len = 20

  salt() {
    return crypto.randomBytes(8).toString('base64')
  }

  async encode(password: string) {
    const salt = this.salt()
    const key = this.pbkdf2(password, salt, this.iterations, this.len).toString(
      'base64'
    )
    return `${this.algorithm}$${this.iterations}$${salt}$${key}`
  }

  async verify(password: string, hashedPassword: string) {
    const parts = hashedPassword.split('$')
    const iterations = parseInt(parts[1])
    const salt = parts[2]
    const value = this.pbkdf2(password, salt, iterations, this.len).toString('base64')
    return value === parts[3]
  }

  async mustUpdate(hashedPassword: string) {
    const parts = hashedPassword.split('$')
    return parseInt(parts[1]) !== this.iterations
  }

  private pbkdf2(key: string, salt: string, iterations: number, dkLen: number) {
    return crypto.pbkdf2Sync(key, salt, iterations, dkLen, 'sha1')
  }
}
