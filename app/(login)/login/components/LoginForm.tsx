'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

interface ILoginData {
  email: string | undefined
  password: string | undefined
  rememberMe: boolean | undefined
}

const schema = yup
  .object({
    email: yup.string().email('Wrong Email').required('Requred field'),
    password: yup.string().required('Requred field'),
    rememberMe: yup.boolean(),
  })
  .required()


export default function LoginForm() {
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
      rememberMe: true,
    },
  })

  const sendOrderForm: SubmitHandler<ILoginData> = (data: ILoginData, e) => {
    console.log(data)
    setIsLoading(true)
  }

  return (
    <>
      <div className='bg-white dark:bg-slate-800 mt-6 grid-rows-2 border bordered border-slate-200 dark:border-slate-600 rounded-xl p-6 drop-shadow-md'>
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

          <div className='mt-3'>
            <div className='form-control'>
              <label className='label p-0 cursor-pointer flex justify-start gap-3 text-slate-600 dark:text-slate-300'>
                <input
                  {...register('rememberMe')}
                  type='checkbox'
                  className='default:ring-2'
                />
                Remember Me
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
      </div>
    </>
  )
}
