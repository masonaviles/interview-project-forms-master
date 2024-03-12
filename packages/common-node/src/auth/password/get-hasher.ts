import { BCryptPasswordHasher } from './hashers/bcrypt'
import { BCrypt_SHA256_PasswordHasher } from './hashers/bcrypt-sha256'
import { PBKDF2_SHA1_PasswordHasher } from './hashers/pbkdf2-sha1'
import { PBKDF2_SHA256_PasswordHasher } from './hashers/pbkdf2-sha256'

const hashers = {
  pbkdf2_sha256: PBKDF2_SHA256_PasswordHasher,
  pbkdf2_sha1: PBKDF2_SHA1_PasswordHasher,
  bcrypt_sha256: BCrypt_SHA256_PasswordHasher,
  bcrypt: BCryptPasswordHasher,
} as const

type HasherAlgorithmType = keyof typeof hashers

export const identifyHasher = (hashedPassword: string): HasherAlgorithmType => {
  const algorithm = hashedPassword.split('$')[0]
  if (algorithm in hashers) {
    return algorithm as HasherAlgorithmType
  }
  throw new Error(`Unidentified hasher: ${algorithm}`)
}

export const getHasherInstance = (algorithm: HasherAlgorithmType) => {
  if (!(algorithm in hashers)) {
    throw new Error(`unsupported algorithm ${algorithm}`)
  }
  return new hashers[algorithm]()
}
