import {centimetresToMeters, getCubicWeight} from "../helpers"

export const WEIGHT_UNIT = 'kg'

export const getAverage = objects_of_category => {
  const total = objects_of_category.reduce(
    (acc, value) => {
      const {
        size: {
          width: width_cm,
          length: length_cm,
          height: height_cm,
        },
      } = value

      const cubic_weight = getCubicWeight(centimetresToMeters(width_cm), centimetresToMeters(length_cm), centimetresToMeters(height_cm))
      return acc + cubic_weight
    }, 0
  )

  return parseFloat(total) / objects_of_category.length
}