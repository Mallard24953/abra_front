'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import useAuth from '@/hooks/useAuth'


interface ILoginData {
  email: string | undefined
  password: string | undefined
}

const schema = yup
  .object({
    email: yup.string().email('Wrong Email').required('Requred field'),
    password: yup.string().required('Requred field'),
  })
  .required()


export default function LoginForm({ onSubmit }: { onSubmit: () => void }) {

  const { loginUser } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const sendOrderForm: SubmitHandler<ILoginData> = async (data: ILoginData, e) => {
    setIsLoading(true)
    await loginUser({
      name: data.email,
      email: data.email,
      password: data.password
    })
    setIsLoading(false)
    onSubmit()
  }

  return (
    <>
        <form onSubmit={handleSubmit(sendOrderForm)}>
          <div className='grid grid-cols-1 gap-3'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text-alt text-slate-600 dark:text-slate-300'>
                  E-Mail
                </span>
              </label>
              <input
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
                type='text'
                placeholder='test@abra-it.com'
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm ffocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm'
              />
              <label className='label'>
                {errors.email && (
                  <span className='text-xs text-red-800 dark:text-red-400'>
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text-alt text-slate-600 dark:text-slate-300'>
                  Password
                </span>
              </label>
              <input
                {...register('password')}
                aria-invalid={errors.email ? 'true' : 'false'}
                type='password'
                placeholder=''
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm'
              />
              <label className='label'>
                {errors.password && (
                  <span className='text-xs text-red-800 dark:text-red-400'>
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className='mt-6 flex justify-end'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {<>Login</>}
            </button>
          </div>
        </form>
    </>
  )
}
