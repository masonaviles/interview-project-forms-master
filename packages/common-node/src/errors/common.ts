import { createError } from './create'

/**
 * Throw this error when there is something wrong in how the app is configured.
 */
export const AppConfigError = createError('AppConfigError')

/**
 * Other common error types
 */
export const CenterUserError = createError('CenterUserError')
export const UpstreamProviderError = createError('UpstreamProviderError')
export const NotImplementedError = createError('NotImplementedError')
export const ArgumentError = createError('ArgumentError')
export const CouldNotGetContractFromChainError = createError(
  'CouldNotGetContractFromChainError'
)
