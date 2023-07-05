'use client'
import { IProduct } from '@/types'
import Image from 'next/image'

interface ICartItemProps {
  product: IProduct
  count: number
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function CartItem({ product, count }: ICartItemProps) {
  return (
    <div className='flex flex-row p-6 mx-6 gap-6'>
      <div className='w-20'>
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${product.image}`}
          alt={product.name}
          width={100}
          height={100}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md'
        />
      </div>
      <div className='flex-1 text-slate-700'>{product.name}</div>
      <div className='w-20 text-slate-700'>{count}</div>
      <div className='w-20 text-end'>
        { formatter.format(+product.price) }
      </div>
    </div>
  )
}
