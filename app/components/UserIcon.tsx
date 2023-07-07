'use client'
import { useAppSelector } from '@/store/hooks'
import { useEffect, useState } from 'react'
import LoginModal from './LoginModal'
import useAuth from '@/hooks/useAuth'
import { IUser } from '@/types'

export default function UserIcon() {
  const userFromState = useAppSelector((state) => state.user)
  const { user } = useAuth()
  const [currentUser, setCurrentUser] = useState<IUser>()

  useEffect(() => {
    setCurrentUser(userFromState.user)
  }, [userFromState])

  const Button = (user: any) => {
    console.log(user.user.email)
    return (
      <>
        <button className='flex w-full justify-center rounded-md border border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          {user.user.email}
        </button>
      </>
    )
  }

  return (
    <>
      {currentUser && <Button user={currentUser} />}
      {!currentUser && <LoginModal />}
    </>
  )
}
