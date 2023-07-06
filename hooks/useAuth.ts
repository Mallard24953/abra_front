import useSWR from 'swr'
import axiosAPI from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const useAuth = ({ middleware, redirectIfAuthenticated }: any = {}) => {
  // const router = useRouter()
  const [loading, setLoading] = useState(true)
  

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, () =>
    axiosAPI
      .get('/api/user')
      .then((res) => {
        return res.data.data
      })
      .catch((error) => {
        if (error.response.status !== 409) throw error

        // router.push('/verify-email')
      })
  )

  const csrf = () => axiosAPI.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: any) => {
    await csrf()

    setErrors([])

    axiosAPI
      .post('/register', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf()
    // setErrors([])
    // setStatus(null)

    axiosAPI
      .post('/login', props)
      .then(res => console.log('/login', res))
      .then(() => mutate())
      //.then(() => router.push('/') )
      .catch((error) => {
        if (error.response.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  const forgotPassword = async ({ setErrors, setStatus, email }: any) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axiosAPI
      .post('/forgot-password', { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axiosAPI
      .post('/reset-password')
      //.post('/reset-password', { token: router.query.token, ...props })
      .then((response) =>
        console.log(response)
        //  router.push('/login?reset=' + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error

        setErrors(error.response.data.errors)
      })
  }

  const resendEmailVerification = ({ setStatus }: any) => {
    axiosAPI
      .post('/email/verification-notification')
      .then((response) => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axiosAPI.post('/logout').then(() => mutate(null))
    }

    // window.location.pathname = '/login'
    // router.push('/login')
  }

  useEffect(() => {
    if (user || error) {
      setLoading(false)
    }
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      //router.push(redirectIfAuthenticated)
    if (window.location.pathname === '/verify-email' && user?.email_verified_at)
      //router.push(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  }
}

export default useAuth
