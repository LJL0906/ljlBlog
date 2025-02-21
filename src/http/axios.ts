import type { AxiosInstance } from "axios"
import axio from "axios"

const fetch = axio.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
})

fetch.interceptors.request.use((config) => {
  return config
})

fetch.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default fetch as AxiosInstance