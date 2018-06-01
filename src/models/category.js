import {centimetresToMeters, getCubicWeight, gramsToKilograms} from "../helpers"

export const WEIGHT_UNIT = 'kg'

const toIsoUnits = objects_of_category =>
  objects_of_category.reduce(
    (acc, value) =>
      acc.concat([{
        ...value,
        weight: gramsToKilograms(value.weight),
        size: {
          ...value.size,
          width: centimetresToMeters(value.size.width),
          length: centimetresToMeters(value.size.length),
          height: centimetresToMeters(value.size.height),
        },
      }])
    , []
  )

export const getAverageCubicWeight = objects_of_category => {
  const total = toIsoUnits(objects_of_category).reduce(
    (acc, value) => {
      const {
        size: {
          width,
          length,
          height,
        },
      } = value

      return acc + getCubicWeight(width, length, height)
    }, 0
  )

  return parseFloat(total) / objects_of_category.length
}