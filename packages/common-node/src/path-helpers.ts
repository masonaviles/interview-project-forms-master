import fs from 'fs'

export function validatePathExists(path: string): string {
  if (fs.existsSync(path)) {
    return path
  } else {
    throw new Error(`Path does not exist: ${path}`)
  }
}
