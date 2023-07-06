import useSWR from 'swr'
import axiosAPI from '@/lib/axios'

const useAuth = ({ middleware, redirectIfAuthenticated }: any = {}) => {
  const {
    data: user,
    error,
    mutate,
  } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, () =>
     axiosAPI
      .get('/api/user', { withCredentials: true })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error
      })

  )

  const csrf = () => axiosAPI.get('/sanctum/csrf-cookie')

  const registerUser = async ({ setErrors, ...props }: any) => {
    await csrf()
    axiosAPI
      .post('/register', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error
      })
  }

  const loginUser = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf()

    axiosAPI
      .post('/login', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  const logoutUser = async () => {
    if (!error) {
      await axiosAPI.post('/logout').then(() => mutate(null))
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
