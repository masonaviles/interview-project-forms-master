import { isUndefined } from './is-undefined'

describe('isUndefined', () => {
  it('when given undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it.each([
    [null, false],
    ['a', false],
    [6, false],
    ['undefined', false],
  ])('when given %s', (input, output) => {
    expect(isUndefined(input)).toEqual(output)
  })
})
