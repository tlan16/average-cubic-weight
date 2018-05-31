const BASE_URL = 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com'
const API_ENDPOINT_START = '/api/products/1'


async function fetchData(category) {
  return fetchRecursive(BASE_URL + API_ENDPOINT_START, category, [])
}

async function fetchRecursive(api_endpoint, category, objects_accumulator) {
  const responseData = await fetchAction(api_endpoint)
  const objects_of_category = responseData.objects
    .filter(object =>
      object.category == category
    )
  const next = responseData.next
  if (!next)
    return [...objects_accumulator, ...objects_of_category]
  else
    return fetchRecursive(BASE_URL + next, category, [...objects_accumulator, ...objects_of_category])

}

const fetchAction = (api_endpoint) => {
  return fetch(api_endpoint)
    .then(response => response.json())
}

export default fetchData