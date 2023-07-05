import { IProduct } from '@/types'
import { createContext, useContext } from 'react'

interface ICartContext {
  products: IProduct[]
  addToCart: (product: IProduct) => void
}

export const CartContext = createContext<ICartContext>({
  products: [], 
  addToCart(product){},
})

export const useCartContext = () => useContext(CartContext)