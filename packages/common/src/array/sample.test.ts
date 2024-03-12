import { sample } from './sample'

describe('sample', () => {
  it('happy path', () => {
    expect(sample([1, 2, 3])).toBeTruthy()
  })

  it('when empty', () => {
    expect(sample([])).toBeUndefined()
  })
})
