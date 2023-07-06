import type { Metadata } from 'next'
import Image from 'next/image'
import LoginForm from './components/LoginForm'


const PAGETITLE = 'Login'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE + ' | ABRA Test App',
  }
}

export default async function Page() {
  return (
    <>
      <main className='w-full h-screen flex'>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <div className='w-11/12 sm:w-8/12'>
              <LoginForm />
          </div>
        </div>
        <div className='w-1/2 hidden lg:block'>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/abso.jpg`}
          alt={'Logim Screen Image'}
          width={1000}
          height={1200}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
          priority={true}
        />
        </div>
      </main>
    </>
  )
}
