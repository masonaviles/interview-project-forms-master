import { StatsD } from 'hot-shots'
import { Logger } from 'pino'

interface IApplicationMonitoring {
  statsd: StatsD
  logger: Logger
}

interface Options {
  prefix: string
}

export function createO11yBundle(
  application: IApplicationMonitoring,
  options: Options
) {
  const statsd = application.statsd.childClient({
    prefix: options.prefix,
  })
  const logger = application.logger.child({
    name: options.prefix,
  })

  return {
    logger,
    statsd,
  }
}
