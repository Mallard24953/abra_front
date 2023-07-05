import { IProduct } from '@/types'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'


interface IProductCardProps {
  product: IProduct
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ product }: IProductCardProps) {

  return (
    <>
      <div className='group relative flex flex-col p-6 shadow-xl rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-400'>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${product.image}`}
            alt={product.name}
            width={400}
            height={400}
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
            quality={85}
            priority={true}
          />
        </div>
        <div className='my-3'>
          <div className='text-xl font-medium text-red-700 mb-2'>
            Price:{' '} {formatter.format(+product.price)}
          </div>
          <div>
            <h3 className='text-sm  text-slate-700'>{product.name}</h3>
          </div>
        </div>
        <div className='mt-auto'>
          <AddToCartButton product={product} />
        </div>
      </div>
    </>
  )
}
