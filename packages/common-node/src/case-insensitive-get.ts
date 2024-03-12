export const caseInsensitiveGet = (obj: Record<string, any>, key: string) => {
  if (obj[key]) {
    return obj[key]
  }
  for (const k of Object.keys(obj)) {
    if (k.toLowerCase() === key.toLowerCase()) {
      return obj[k]
    }
  }
  return null
}
