import { groupBy } from './group-by'

describe('groupBy', () => {
  test('should work', () => {
    const items = [
      { a: 'a', b: 'b' },
      { a: 'b', b: 'c' },
      { a: 'a', b: 'd' },
      { a: 'c', b: 'e' },
    ]
    const grouped = groupBy(items, (item) => item.a)
    expect(grouped['a'].length).toEqual(2)
    expect(grouped['b']).toEqual([{ a: 'b', b: 'c' }])
  })
})
