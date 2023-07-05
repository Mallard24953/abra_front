import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from '@/types'

interface cartState {
  products: IProduct[]
  totalPrice: number
}

const initialState:cartState = {
  products: [],
  totalPrice: 0 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action:PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload]
      let total = 0
      state.products.forEach((product: IProduct) => (total += +product.price))
      state.totalPrice = total
    },
  },
})


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer