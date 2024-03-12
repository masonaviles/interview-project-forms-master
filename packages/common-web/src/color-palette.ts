import Color from 'color'

export const generateColorPaletteAcrossHueSpectrum = (
  startColor: string,
  count: number
): string[] => {
  if (count <= 0) {
    throw new Error('Count must be a positive integer')
  }

  const colors: string[] = []
  const step = 360 / count // Distribute colors evenly across the hue spectrum
  const initialHue = Color(startColor).hue()

  for (let i = 0; i < count; i++) {
    const newColor = Color().hsl((initialHue + step * i) % 360, 100, 50)
    colors.push(newColor.hex())
  }

  return colors
}
