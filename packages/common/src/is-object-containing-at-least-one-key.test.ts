import { isObjectContainingAtLeastOneKey } from './is-object-containing-at-least-one-key'

describe('isObjectContainingAtLeastOneKey function', () => {
  it('should return true for a non-empty object', () => {
    const nonEmptyObject = { key: 'value' }
    expect(isObjectContainingAtLeastOneKey(nonEmptyObject)).toBe(true)
  })

  it('should return false for an empty object', () => {
    const emptyObject = {}
    expect(isObjectContainingAtLeastOneKey(emptyObject)).toBe(false)
  })

  it('should return false for null', () => {
    const nullValue = null
    expect(isObjectContainingAtLeastOneKey(nullValue)).toBe(false)
  })

  it('should return false for undefined', () => {
    const undefinedValue = undefined
    expect(isObjectContainingAtLeastOneKey(undefinedValue)).toBe(false)
  })

  it('should return false for an array', () => {
    const arrayValue = [1, 2, 3]
    expect(() => isObjectContainingAtLeastOneKey(arrayValue)).toThrowError()
  })

  it('should return false for a string', () => {
    const stringValue = 'Hello, World!'
    expect(isObjectContainingAtLeastOneKey(stringValue)).toBe(false)
  })

  it('should return false for a number', () => {
    const numberValue = 42
    expect(isObjectContainingAtLeastOneKey(numberValue)).toBe(false)
  })
})
