const BASE_URL = process.env.API_URL
const API_ENDPOINT_START = '/api/products/1'

async function fetchData(category) {
  return fetchRecursive(BASE_URL + API_ENDPOINT_START, category, [])
}

async function fetchRecursive(api_endpoint, category, objects_accumulator) {
  const responseData = await fetchAction(api_endpoint)
  const objects_of_category = responseData.objects
    .filter(object =>
      object.category === category
    )
  const next = responseData.next

  if (next)
    return fetchRecursive(BASE_URL + next, category, [...objects_accumulator, ...objects_of_category])
  else
    return [...objects_accumulator, ...objects_of_category]
}

const fetchAction = api_endpoint => {
  return fetch(api_endpoint)
    .then(response => response.json())
}

export default fetchData