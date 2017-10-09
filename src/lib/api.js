const API_ENDPOINT = `https://api.punkapi.com/v2/`

export const fetchBeers = (filter) => {
  return fetch(`${API_ENDPOINT}${filter}`)
    .then(r => r.json())
}
