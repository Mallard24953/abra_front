import Axios from 'axios'

const axiosAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
})

export default axiosAPI
