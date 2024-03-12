import { describe, expect, test } from 'vitest'
import { bounded } from './bounded'

describe('bounded', () => {
  test('above', () => {
    expect(bounded(100, { lowerBound: 0, upperBound: 10 })).toEqual(10)
  })

  test('below', () => {
    expect(bounded(0, { lowerBound: 5, upperBound: 10 })).toEqual(5)
  })

  test('within', () => {
    expect(bounded(7, { lowerBound: 5, upperBound: 10 })).toEqual(7)
  })
})
