import httpClient from './httpClient'

const fetch = ({ offset = 0, limit = 10 }) =>
  httpClient.get('/comics', { params: { offset, limit } })

const fetchByCharacterIds = ({ characters = [], offset = 0, limit = 10 }) =>
  httpClient.get('/comics', {
    params: { offset, limit, characters }
  })

export { fetch, fetchByCharacterIds }
