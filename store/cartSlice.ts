import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types'

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

/* const setInitialState = () => {
  const savedCart = localStorage.getItem('cart')
  
  if (savedCart) {
    const prods: IProduct[] = JSON.parse(savedCart)
    initialState = {
      products: prods,
      totalPrice: _calcTotalPrice(prods),
    }
  }
} */

// setInitialState()

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload]
      state.totalPrice = _calcTotalPrice(state.products)
      // localStorage.setItem('cart', JSON.stringify(state.products))
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
