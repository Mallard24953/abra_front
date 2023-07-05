'use client'

import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'

const Counter = ({ count }: { count: number }) => {
  return <span className='text-bold'>{count}</span>
}

export default function MyCart() {
  const count = useAppSelector((state) => state.cart.products)

  return (
    <Link href={'/cart'}>
      <button className='inline-flex items-center rounded-md border border-indigo-600 bg-transparent px-4 py-2 text-sm font-medium  text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        {'My Cart'}&nbsp;
        <Counter count={count.length} />
        &nbsp;{'items'}
      </button>
    </Link>
  )
}
