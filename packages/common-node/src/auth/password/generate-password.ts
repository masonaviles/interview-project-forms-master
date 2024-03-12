import { getHasherInstance, identifyHasher } from './get-hasher'
import { PBKDF2_SHA256_PasswordHasher } from './hashers'

export const saltAndHashPlaintextPassword = async (password: {
  plaintext: string
}): Promise<string> => {
  // https://docs.djangoproject.com/en/4.0/topics/auth/passwords/
  // <algorithm>$<iterations>$<salt>$<hash>
  const hasher = new PBKDF2_SHA256_PasswordHasher()
  const hashed = await hasher.encode(password.plaintext)
  return hashed as string
}

export const verifyPassword = async (password: {
  plaintext: string
  hashed: string
}) => {
  const name = identifyHasher(password.hashed)
  const hasher = getHasherInstance(name)
  return await hasher.verify(password.plaintext, password.hashed)
}
