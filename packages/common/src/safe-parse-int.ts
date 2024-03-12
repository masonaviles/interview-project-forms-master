export function safeParseInt(str: string, base = 10): number {
  const result = parseInt(str, base)

  if (isNaN(result)) {
    throw new Error(`Unable to parse '${str}' as an integer.`)
  }

  return result
}
