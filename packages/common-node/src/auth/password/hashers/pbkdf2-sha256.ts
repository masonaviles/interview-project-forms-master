import crypto from 'crypto'
import { IPasswordHasher } from './types'

export class PBKDF2_SHA256_PasswordHasher implements IPasswordHasher {
  algorithm = 'pbkdf2_sha256'
  iterations = 120000
  len = 32
  salt() {
    return crypto.randomBytes(8).toString('base64')
  }

  encode(password: string) {
    return new Promise<string>((resolve, reject) => {
      const salt = this.salt()
      crypto.pbkdf2(
        password,
        salt,
        this.iterations,
        this.len,
        'sha256',
        (err, derivedKey) => {
          if (err) {
            return reject(err)
          }

          const key = derivedKey.toString('base64')
          const result: string =
            this.algorithm + '$' + this.iterations + '$' + salt + '$' + key

          return resolve(result)
        }
      )
    })
  }

  verify(password: string, hashedPassword: string) {
    return new Promise<boolean>((resolve, reject) => {
      if (!hashedPassword) {
        resolve(false)
      }
      const parts = hashedPassword.split('$')
      if (parts.length !== 4) {
        resolve(false)
      }

      const iterations = parseInt(parts[1])
      const salt = parts[2]
      const value = parts[3]
      crypto.pbkdf2(
        password,
        salt,
        iterations,
        this.len,
        'sha256',
        function (err, derivedKey) {
          if (err) {
            return reject(err)
          }
          return resolve(derivedKey.toString('base64') === value)
        }
      )
    })
  }

  async mustUpdate(hashedPassword: string) {
    const parts = hashedPassword.split('$')
    return parseInt(parts[1]) !== this.iterations
  }
}
