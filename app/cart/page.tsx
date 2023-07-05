import type { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import Cart from './components/Cart'

const PAGETITLE = 'Cart'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE,
  }
}

export default async function Page() {
  return (
    <main className='w-full px-6'>
      <PageTitle title={PAGETITLE} />
      <Cart />
    </main>
  )
}
