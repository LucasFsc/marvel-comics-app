import axios from 'axios'
// eslint-disable-next-line import/no-unresolved
import { API_KEY, BASE_URL } from '@env'

export default axios.create({
  baseURL: BASE_URL,
  params: { apiKey: API_KEY }
})
