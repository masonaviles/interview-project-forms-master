import { describe, expect, test } from 'vitest'
import { pick } from './pick'

describe('pick', () => {
  const foo = {
    bar: 'baz',
    bat: 'abz',
    cat: 'dog',
    what: 'thefuck',
  }

  test('should work', () => {
    expect(pick(foo, ['bar', 'cat'])).toEqual({
      bar: 'baz',
      cat: 'dog',
    })
  })

  test('another test case', () => {
    expect(pick(foo, ['what'])).toEqual({
      what: 'thefuck',
    })
  })
})
