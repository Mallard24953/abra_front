'use client'
import { IProduct } from '@/types'
import { store } from '@/store'
import { addToCart } from '@/store/cartSlice'
import { useAppDispatch } from '@/store/hooks'

interface IAddToCartButtonProps {
  product: IProduct
}

export default function AddToCartButton({ product }: IAddToCartButtonProps) {
  const dispatch = useAppDispatch()

  const addProduct = () => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <button
        onClick={() => addProduct()}
        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Add to Cart
      </button>
    </>
  )
}
