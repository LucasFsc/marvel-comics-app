import httpClient from './httpClient'

const fetchByName = ({ name = '' }) =>
  httpClient.get('/characters', { params: { name } })

export { fetchByName }
