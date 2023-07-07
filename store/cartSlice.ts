import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types'
import { setCookie } from 'cookies-next';


interface cartState {
  products: IProduct[]
  totalPrice: number
}

let initialState: cartState = {
  products: [] as IProduct[],
  totalPrice: 0,
}

function _calcTotalPrice(products: IProduct[]) {
  let total = 0
  products.forEach((product: IProduct) => (total += +product.price))
  return total
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload]
      state.totalPrice = _calcTotalPrice(state.products)
      setCookie('cart', state.products, { });
    },
    restoreSavedCart(state, action: PayloadAction<IProduct[]>) {
      state.products = [...action.payload]
      state.totalPrice = _calcTotalPrice(state.products)
    },
  },
})

export const { addToCart, restoreSavedCart } = cartSlice.actions
export default cartSlice.reducer
