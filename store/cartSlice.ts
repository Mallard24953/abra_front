import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IProduct } from '@/types'

interface cartState {
  products: IProduct[]
}

const initialState:cartState = {
  products: [] 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action:PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload]
    }
  },
})


export const { addToCart } = cartSlice.actions
export default cartSlice.reducer