import axios from "axios"
import { API_KEY, BASE_URL } from "react-native-dotenv"

export default axios.create({
  baseURL: BASE_URL,
  params: { apiKey: API_KEY }
})
