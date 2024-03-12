/**
 * Async version of sleep
 */
export const sleep = async (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, ms)
  )
