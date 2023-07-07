'use client'
import Link from 'next/link'
import { getCookie } from 'cookies-next';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { restoreSavedCart } from '@/store/cartSlice'


const Counter = ({ count }: { count: number }) => {
  return <span className='text-bold'>{count}</span>
}

export default function MyCart() {
  const count = useAppSelector((state) => state.cart.products)
  const dispatch = useAppDispatch()
  const savedCart = getCookie('cart')
  
  useEffect(() => {
    if (savedCart) {
      dispatch(restoreSavedCart(JSON.parse(savedCart as string)))
    }
  },[])

  return (
    <Link href={'/cart'}>
      <button className='inline-flex items-center rounded-md border border-indigo-600 bg-transparent px-4 py-2 text-sm font-medium  text-slate-700 dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
        {'My Cart'}&nbsp;
        <Counter count={count.length} />
        &nbsp;{'items'}
      </button>
    </Link>
  )
}
