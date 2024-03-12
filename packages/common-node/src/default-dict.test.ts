import { describe, expect, test } from 'vitest'
import { DefaultDict } from './default-dict'

describe(DefaultDict, () => {
  test('default dict with a list', () => {
    const d = new DefaultDict<string, Array<number>>(() => [])

    d.get('foo').push(1)
    d.get('foo').push(2)
    d.get('foo').push(3)

    expect(d.get('foo').length).toEqual(3)
    expect(d.get('bar').length).toEqual(0)
  })
})
