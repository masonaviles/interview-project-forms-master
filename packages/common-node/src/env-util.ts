/**
 * Wrappers around environment variables.
 */
export const envUtil = {
  /**
   * Get a required environment variable, throw an error if missing.
   * @param name is the environment variable to get
   * @returns the value of that envvar
   */
  required: (name: string): string => {
    const value = process.env[name]
    if (!value) {
      throw `missing: ${name}`
    }

    return value
  },

  /**
   * Get an environment variable by name with an optional fallback if it does not exist.
   * @param name
   * @param fallback
   * @returns
   */
  withDefault: (name: string, fallback: string): string => {
    return process.env[name] || fallback
  },

  requiredInProd: (name: string, defaultWhenNotProd: string): string => {
    if (process.env.NODE_ENV === 'production') {
      const envValue = process.env[name]
      if (!envValue) {
        throw new Error(`${name} is required in production`)
      }
      return envValue
    }
    return process.env[name] || defaultWhenNotProd
  },
}
