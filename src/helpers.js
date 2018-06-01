export const getCubicWeight = (width, length, height, factor = 250) => (
  width * length * height * factor
)

export const centimetresToMeters = centimetres => parseFloat(centimetres) / 100

export const gramsToKilograms = grams => parseFloat(grams) / 1000