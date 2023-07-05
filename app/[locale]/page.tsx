import type { Metadata } from 'next'
import { IProduct } from '@/types'
import PageTitle from '@/components/PageTitle'
import ProductCard from './components/ProductCard'

const PAGETITLE = 'Our Products'

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGETITLE,
  }
}

export default async function Page() {
  const products: IProduct[] = await getData()

  return (
    <main className='w-full px-6'>
      <PageTitle title={PAGETITLE} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mx-auto'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
