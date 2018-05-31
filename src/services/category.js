const BASE_URL = process.env.API_URL
export const API_ENDPOINT_START = '/api/products/1'

async function fetchRecursive(api_endpoint, category_name, objects_accumulator) {
  const responseData = await fetchAction(api_endpoint)
  const objects_of_category = responseData.objects
    .filter(object =>
      object.category === category_name
    )
  const next = responseData.next

  if (next)
    return fetchRecursive(BASE_URL + next, category_name, [...objects_accumulator, ...objects_of_category])
  else
    return [...objects_accumulator, ...objects_of_category]
}

export default async function fetchData(category_name) {
  return fetchRecursive(BASE_URL + API_ENDPOINT_START, category_name, [])
}

const fetchAction = api_endpoint =>
  fetch(api_endpoint)
    .then(response => response.json())