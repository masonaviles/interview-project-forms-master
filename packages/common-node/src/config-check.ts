/**
 * Configuration checks for node environment variables.
 */

import invariant from 'invariant'
import pino from 'pino'

export type BackendConfig = {
  NODE_ENV: 'development' | 'production' | 'test'
  CENTER_APEX: string
  SECRET_KEY: string
  DATABASE_URL: string
  COOKIE_DOMAIN: string
  LOG_LEVEL: pino.Level | 'silent'
}

function validateLogLevel(logLevel: string | undefined): BackendConfig['LOG_LEVEL'] {
  const validLogLevels: BackendConfig['LOG_LEVEL'][] = [
    'fatal',
    'error',
    'warn',
    'info',
    'debug',
    'trace',
    'silent',
  ]
  invariant(
    validLogLevels.includes(logLevel as BackendConfig['LOG_LEVEL']),
    `Invalid LOG_LEVEL: ${logLevel}. Valid levels are: ${validLogLevels.join(', ')}`
  )
  return logLevel as BackendConfig['LOG_LEVEL']
}

function validateNodeEnv(env: string | undefined): BackendConfig['NODE_ENV'] {
  const validNodeEnvs: BackendConfig['NODE_ENV'][] = [
    'development',
    'production',
    'test',
  ]
  invariant(env, 'process.env.NODE_ENV must be provided')
  invariant(
    validNodeEnvs.includes(env as BackendConfig['NODE_ENV']),
    `Invalid NODE_ENV: ${env}. Valid levels are: ${validNodeEnvs.join(', ')}`
  )
  return env as BackendConfig['NODE_ENV']
}

export function getBackendConfig(options: Partial<BackendConfig> = {}): BackendConfig {
  const config = {
    NODE_ENV: validateNodeEnv(options.NODE_ENV || process.env.NODE_ENV),
    CENTER_APEX: options.CENTER_APEX || process.env.CENTER_APEX,
    SECRET_KEY: options.SECRET_KEY || process.env.SECRET_KEY,
    DATABASE_URL: options.DATABASE_URL || process.env.DATABASE_URL,
    COOKIE_DOMAIN: options.COOKIE_DOMAIN || process.env.COOKIE_DOMAIN,
    LOG_LEVEL: validateLogLevel(options.LOG_LEVEL || process.env.LOG_LEVEL || 'error'),
  }

  invariant(config.CENTER_APEX, 'process.env.CENTER_APEX must be defined')
  invariant(config.SECRET_KEY, 'process.env.SECRET_KEY must be provided')
  invariant(!config.SECRET_KEY.startsWith('$'), 'Is secret_key expanded?')
  invariant(config.DATABASE_URL, 'process.env.DATABASE_URL must be provided')
  invariant(config.COOKIE_DOMAIN, 'process.env.COOKIE_DOMAIN must be provided')
  invariant(
    config.COOKIE_DOMAIN.startsWith('.'),
    'COOKIE_DOMAIN should probably start with a . (for the center apex'
  )

  return config as BackendConfig
}
