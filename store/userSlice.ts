import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@/types'

interface userState {
  user: IUser | undefined
}

let initialState: userState = {
  user: undefined
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    storeUser(state, action: PayloadAction<IUser>) {
      state.user = Object.assign({}, action.payload) 
    },
  },
})

export const { storeUser } = userSlice.actions
export default userSlice.reducer
