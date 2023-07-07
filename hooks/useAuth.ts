import useSWR from 'swr'
import axiosAPI from '@/lib/axios'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { storeUser } from '@/store/userSlice'

const useAuth = ({ middleware, redirectIfAuthenticated }: any = {}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, () =>
    axiosAPI
      .get('/api/user', { withCredentials: true })
      .then((response) => response.data)
      .then((data) => {
        console.log('AUTH', data)
        dispatch(storeUser(data))
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error
      })
  )

  const csrf = () => axiosAPI.get('/sanctum/csrf-cookie')

  const registerUser = async ({ setErrors, ...props }: any) => {
    await csrf()
    axiosAPI
      .post('/api/register', props)
      .then(() => mutate())
      .then(() => router.push('/'))
      .catch((error) => {
        if (error.response.status !== 422) throw error
      })
  }

  const loginUser = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf()

    axiosAPI
      .post('/api/login', props)
      .then((response) => {
        mutate()
        setCookie('access_token', response.data?.access_token, {})
        return response
      })
      .then((response) => dispatch(storeUser(response.data)))
      .catch((error) => {
        if (error.response.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  const logoutUser = async () => {
    if (!error) {
      await axiosAPI.post('/api/logout').then(() => mutate())
    }
  }

  return {
    user,
    registerUser,
    loginUser,
    logoutUser,
  }
}

export default useAuth
