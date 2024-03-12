export interface IPasswordHasher {
  salt(): string

  encode(password: string): Promise<string>

  verify(password: string, hashedPassword: string): Promise<boolean>

  mustUpdate(hashedPassword: string): Promise<boolean>
}
