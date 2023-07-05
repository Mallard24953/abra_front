'use client'
import CartItem from './CartItem'
import { IProduct } from '@/types'
import { useAppSelector } from '@/store/hooks'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Cart() {
  const products: IProduct[] = useAppSelector((state) => state.cart.products)
  const total: number = useAppSelector((state) => state.cart.totalPrice)


  if (total === 0) {
    return (
      <div className='w-full flex flex-col shadow-xl rounded-xl bg-white dark:bg-slate-800 '>
        <div className='flex gap-6 p-6 m-6 justify-center text-slate-500'>
          there&apos;s nothing here...
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='w-full flex flex-col shadow-xl rounded-xl bg-white dark:bg-slate-800 divide-y'>
        <div className='flex flex-row gap-6 p-6 m-6 mb-0'>
          <div className='w-20'> </div>
          <div className='flex-1 text-sm font-bold text-slate-500'>Product</div>
          <div className='w-20 text-sm font-bold text-slate-500'>Count</div>
          <div className='w-20 text-sm font-bold text-end text-slate-500'>
            Price
          </div>
        </div>

        {products.map((product, index) => (
          <CartItem count={1} key={index} product={product} />
        ))}
        <div className='flex flex-row gap-6 p-6 m-6 border-t border-slate-300'>
          <div className='w-20'></div>
          <div className='flex-1'></div>
          <div className='w-20 text-lg font-semibold text-end text-slate-500'>
            Total:
          </div>
          <div className='w-20 text-lg font-semibold text-end'>
            {formatter.format(+total)}
          </div>
        </div>
      </div>
    </>
  )
}
