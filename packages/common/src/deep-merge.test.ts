import { describe, expect, it } from 'vitest'
import { deepMerge } from './deep-merge'

describe('deepMerge function', () => {
  it('should merge two simple objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 2 })
  })

  it('should merge nested objects', () => {
    const obj1 = { a: { b: 1 } }
    const obj2 = { a: { c: 2 } }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: { b: 1, c: 2 } })
  })

  it('should handle array merging', () => {
    const obj1 = { a: [1, 2] }
    const obj2 = { a: [3, 4] }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: [1, 2, 3, 4] })
  })

  it('should overwrite primitives with object', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: { b: 2 } }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: { b: 2 } })
  })

  it('should handle null and undefined values', () => {
    const obj1 = { a: null }
    const obj2 = { b: undefined }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: null, b: undefined })
  })
  it('should merge deeply nested objects', () => {
    const obj1 = { a: { b: { c: 1 } } }
    const obj2 = { a: { b: { d: 2 } }, e: 3 }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: { b: { c: 1, d: 2 } }, e: 3 })
  })

  it('should handle merging objects with different types', () => {
    const obj1 = { a: 10, b: 'string', c: true }
    const obj2 = { a: { nested: 'object' }, b: null, d: [1, 2] }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: { nested: 'object' }, b: null, c: true, d: [1, 2] })
  })

  it('should handle merging special object types like Date', () => {
    const date = new Date()
    const obj1 = { a: date }
    const obj2 = { b: 'other' }
    const result = deepMerge(obj1, obj2)
    expect(result).toEqual({ a: date, b: 'other' })
  })

  it('should properly clone arrays and objects', () => {
    const obj1 = { a: { nested: 'value' }, b: [1, 2] }
    const obj2 = { a: { another: 'value' }, b: [3, 4] }
    const result = deepMerge(obj1, obj2)
    expect(result.a).not.toBe(obj1.a) // Check that objects are cloned
    expect(result.b).not.toBe(obj1.b) // Check that arrays are cloned
    expect(result).toEqual({
      a: { nested: 'value', another: 'value' },
      b: [1, 2, 3, 4],
    })
  })

  // it.skip('should handle circular references', () => {
  //   const obj1 = { a: 1 }
  //   // @ts-expect-error intentional circular reference
  //   obj1.self = obj1
  //   const obj2 = { b: 2 }
  //   const result = deepMerge(obj1, obj2)
  //   expect(result).toEqual({ a: 1, b: 2, self: result }) // self should point to the merged object
  // })
})
