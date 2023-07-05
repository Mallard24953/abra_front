import type { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'

const PAGETITLE = 'Login'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE + ' | ABRA Test App',
  }
}

export default async function Page() {
  return (
    <main className='w-full px-6'>

    </main>
  )
}
