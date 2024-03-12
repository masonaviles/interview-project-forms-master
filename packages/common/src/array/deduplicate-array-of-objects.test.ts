import { deduplicateArrayOfObjects as subj } from './deduplicate-array-of-objects'

describe('deduplicateArrayOfObjects', () => {
  it('happy path', () => {
    expect(subj(['a', 'b'])).toEqual(['a', 'b'])
    expect(subj([{}, {}])).toEqual([{}])
    expect(subj([{ key: 'value' }, { key: 'value2' }, { key: 'value' }])).toEqual([
      { key: 'value' },
      { key: 'value2' },
    ])
  })
})
