export const bounded = (
  value: number,
  params: {
    lowerBound: number
    upperBound: number
  }
) => {
  if (value > params.upperBound) {
    return params.upperBound
  } else if (value < params.lowerBound) {
    return params.lowerBound
  }
  return value
}
