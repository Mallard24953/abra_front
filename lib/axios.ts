import Axios from 'axios'
import { getCookie } from 'cookies-next';

const access_token = getCookie('access_token')

const axiosAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${access_token}`,
  },
  withCredentials: true
})

export default axiosAPI
