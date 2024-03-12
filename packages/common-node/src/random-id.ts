import * as nanoID from 'nanoid'

export const randomID = (size?: number) => {
  return nanoID.nanoid(size || 16)
}

const hexAlphabet = nanoID.customAlphabet('1234567890abcdef')
export const randomHexID = (size = 16) => hexAlphabet(size)

export const randomIDWithPrefix = (prefix: string, size = 16) => {
  return `${prefix}_${randomHexID(size)}`
}
