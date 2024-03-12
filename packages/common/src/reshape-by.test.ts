import { reshapeBy } from './reshape-by'

describe('reshapeBy', () => {
  test('should work', () => {
    const items = [
      { id: 1, a: 'a', b: 'b' },
      { id: 2, a: 'b', b: 'c' },
      { id: 3, a: 'a', b: 'd' },
      { id: 4, a: 'c', b: 'e' },
    ]
    const grouped = reshapeBy(items, (item) => item.id.toString())
    expect(Object.keys(grouped).length).toEqual(4)
    expect(grouped).toMatchObject({
      '1': { id: 1, a: 'a', b: 'b' },
      '2': { id: 2, a: 'b', b: 'c' },
      '3': { id: 3, a: 'a', b: 'd' },
      '4': { id: 4, a: 'c', b: 'e' },
    })
  })
})
