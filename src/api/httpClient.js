import axios from 'axios'
// eslint-disable-next-line import/no-unresolved
import { BASE_URL, PUBLIC_API_KEY } from '@env'
import { apiDefaultParams } from '~/utils'

export default axios.create({
  baseURL: BASE_URL,
  params: { apikey: PUBLIC_API_KEY, ...apiDefaultParams() }
})
