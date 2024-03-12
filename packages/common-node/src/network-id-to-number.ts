import crypto from 'crypto'
import { NetworkID } from 'common'

/**
 * Convert a NetworkID into an integer.
 *
 * This is used in cases where we want to distribute or randomize something in
 * a way consistent based on a network id.
 *
 * @param network the network ID
 * @param upto the random number will be less than this value.
 *
 * @returns the random number.
 */
export const networkIdToNumber = (network: NetworkID, upto: number): number => {
  const asHex = crypto.createHash('md5').update(network.toString()).digest('hex')

  return parseInt(asHex, 16) % upto
}
