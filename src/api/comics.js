import httpClient from './httpClient'

const fetch = ({ offset = 0, limit = 10 }) =>
  httpClient.get(`/comics`, { params: { offset, limit } })

export { fetch }
