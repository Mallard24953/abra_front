'use client'
import { useAppSelector } from '@/store/hooks'
import Link from 'next/link'

export default function ShoppingCartIcon() {
  const count = useAppSelector((state) => state.cart.products)
  const total = useAppSelector((state) => state.cart.totalPrice)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <Link href={'/cart'}>
      <button
        type='button'
        className='inline-flex items-center rounded-md border border-transparent  bg-slate-700 px-3 py-1.5  text-slate-300 shadow-sm '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
          />
        </svg>
        <div className='ml-2'>
          {count.length === 0 && `empty`}
          {count.length > 0 && `${count.length} items, ${formatter.format(+total)}`}
        </div>
      </button>
    </Link>
  )
}
