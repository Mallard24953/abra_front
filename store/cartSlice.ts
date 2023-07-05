import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from '@/types'

interface cartState {
  products: IProduct[]
}

const initialState:cartState = {
  products: [{
    id: 6,
    name: "SEO Video Course: How to get traffic and Google rating",
    price: 39,
    image: "absolute.jpg"
  }] 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action:PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload] 
    },
  },
})


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer