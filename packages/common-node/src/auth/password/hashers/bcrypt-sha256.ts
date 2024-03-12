import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { IPasswordHasher } from './types'

export class BCrypt_SHA256_PasswordHasher implements IPasswordHasher {
  algorithm = 'bcrypt_sha256'
  iterations = 12

  salt() {
    return bcrypt.genSaltSync(this.iterations)
  }

  async encode(password: string) {
    const salt = this.salt()
    password = crypto.createHash('sha256').update(password).digest('hex')
    const key = bcrypt.hashSync(password, salt)
    return `${this.algorithm}$${key}`
  }

  async verify(password: string, hashedPassword: string) {
    hashedPassword = hashedPassword.substring(
      this.algorithm.length + 1,
      hashedPassword.length
    )
    const shapassword = crypto.createHash('sha256').update(password).digest('hex')
    return bcrypt.compareSync(shapassword, hashedPassword)
  }

  async mustUpdate(hashedPassword: string) {
    const parts = hashedPassword.split('$')
    return parseInt(parts[3]) !== this.iterations
  }
}
