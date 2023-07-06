import type { Metadata } from 'next'
import PageTitle from '@/app/components/PageTitle'
import Cart from './components/Cart'
import StoreProvider from '@/store/StoreProvider'

const PAGETITLE = 'Cart'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE + ' | ABRA Test App',
  }
}

export default async function Page() {
  return (
    <main className='w-full px-6'>
      <PageTitle title={PAGETITLE} />
      <StoreProvider>
      <Cart />
      </StoreProvider>
    </main>
  )
}
