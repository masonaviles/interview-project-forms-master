import jwt from 'jsonwebtoken'
import { z } from 'zod'

const AuthTokenPayloadSchema = z.object({ id: z.string(), email: z.string() })

/**
 * Really should make the iss and exp required (issued and expiration) here so its a full
 * JWT definition -- jwt.verify handles the expiration
 */
export const AuthJWTPayloadPayloadSchema = z.object({
  user: AuthTokenPayloadSchema,
  iat: z.number().positive().optional(),
  exp: z.number().positive().optional(),
  // Compatibility layer with nextauth
  email: z.string().email(),
})
export type AuthJWTPayload = z.infer<typeof AuthJWTPayloadPayloadSchema>

export function createAuthToken(params: AuthJWTPayload): AuthJWTPayload {
  const validatedPayload = AuthJWTPayloadPayloadSchema.parse(params)
  return validatedPayload
}

/**
 * Will synchronously throw an error -- this function actually decodes AND verifies
 */
export function decodeJWT(token: string, secretKey: string): AuthJWTPayload {
  if (!jwt.verify(token, secretKey)) {
    throw new Error('JWT failed verification')
  }
  const decodedContents = jwt.decode(token)
  return AuthJWTPayloadPayloadSchema.parse(decodedContents)
}

export type IJwtSignatureOptions = Omit<jwt.SignOptions, 'algorithm'>

export function createSignedToken(
  payload: AuthJWTPayload,
  secretKey: string,
  options?: IJwtSignatureOptions
): string {
  return jwt.sign(createAuthToken(payload), secretKey, {
    ...options,
    algorithm: 'HS256',
  })
}
