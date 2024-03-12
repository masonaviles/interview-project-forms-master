import { generateColorPaletteAcrossHueSpectrum } from '../src/color-palette'

describe(generateColorPaletteAcrossHueSpectrum, () => {
  it('happy path', () => {
    expect(generateColorPaletteAcrossHueSpectrum('#ff0000', 16)).toEqual([
      '#FF0000',
      '#FF6000',
      '#FFBF00',
      '#DFFF00',
      '#80FF00',
      '#20FF00',
      '#00FF40',
      '#00FF9F',
      '#00FFFF',
      '#009FFF',
      '#0040FF',
      '#2000FF',
      '#7F00FF',
      '#DF00FF',
      '#FF00BF',
      '#FF0060',
    ])
  })
})
