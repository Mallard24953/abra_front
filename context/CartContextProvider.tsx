'use client'
import React, { ReactNode, useState } from 'react'
import { IProduct } from '@/types'
import { CartContext } from './CartContext'

interface ICartContextProviderProps {
  children: ReactNode
}

const CartContextProvider = ({ children }: ICartContextProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const addToCart = (product: IProduct) => {
    setProducts([...products, product])
  }

  console.log(products)

  return (
    <CartContext.Provider value={{ products, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
