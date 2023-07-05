'use client'

import { useFormatter } from 'next-intl'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { IProduct } from '@/types'
import { store } from '@/store'

export default function Cart() {
  const products:IProduct[] = store.getState().cart.products
  const format = useFormatter()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let total = 0
    products.forEach((product:IProduct) => (total += +product.price))
    setTotal(total)
  }, [])

  return (
    <>
      <div className='w-full flex flex-col shadow-xl rounded-xl bg-white dark:bg-slate-800 divide-y'>
        <div className='flex flex-row gap-6 p-6 m-6 mb-0 '>
          <div className='w-20'> </div>
          <div className='flex-1 text-sm font-bold text-slate-500'>Product</div>
          <div className='w-20 text-sm font-bold text-slate-500'>Count</div>
          <div className='w-20 text-sm font-bold text-end text-slate-500'>Price</div>
        </div>

        {products.map((product, index) => (
          <CartItem count={9} key={index} product={product} />
        ))}
        <div className='flex flex-row gap-6 p-6 m-6 border-t border-slate-300'>
          <div className='w-20'></div>
          <div className='flex-1'></div>
          <div className='w-20 text-lg font-semibold text-end text-slate-500'>
            Total:
          </div>
          <div className='w-20 text-lg font-semibold text-end'>
            {format.number(total, { style: 'currency', currency: 'USD' })} 
          </div>
        </div>
      </div>
    </>
  )
}
