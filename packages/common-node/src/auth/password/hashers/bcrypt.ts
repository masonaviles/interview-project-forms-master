import bcrypt from 'bcryptjs'
import { IPasswordHasher } from './types'

export class BCryptPasswordHasher implements IPasswordHasher {
  algorithm = 'bcrypt'
  iterations = 12

  salt() {
    return bcrypt.genSaltSync(this.iterations)
  }

  async encode(password: string) {
    const salt = this.salt()
    const key = bcrypt.hashSync(password, salt)
    return `${this.algorithm}$${key}`
  }

  async verify(password: string, hashedPassword: string) {
    hashedPassword = hashedPassword.substring(
      this.algorithm.length + 1,
      hashedPassword.length
    )
    return bcrypt.compareSync(password, hashedPassword)
  }

  async mustUpdate(hashedPassword: string) {
    const parts = hashedPassword.split('$')
    return parseInt(parts[3]) !== this.iterations
  }
}
