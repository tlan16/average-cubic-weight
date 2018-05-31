/*
    The larger one of actual weight and cubic weight counts.
*/
const FACTOR = 250;

const calculation = objects_of_category => {
  return objects_of_category.reduce(
    (acc, value) => {
      const size = value.size;
      const width = size.width;
      const length = size.length;
      const height = size.height;
      const actual_weight = value.weight / 1000;
      const cubic_weight = width * length * height / 1000000 * FACTOR;
      const weight =
        cubic_weight > actual_weight ? cubic_weight : actual_weight;
      const sum = acc.sum;
      const quantity = acc.quantity;
      return {
        sum: sum + weight,
        quantity: quantity + 1,
        average: (sum + weight) / (quantity + 1)
      };
    },
    { sum: 0, quantity: 0, average: 0 }
  );
};
export default calculation;
