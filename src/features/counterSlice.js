import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counte: 100
  },
  reducers: {
    addNumber(state, action) {
      const calAdd = action.payload
      state.counte = state.counte + calAdd
      console.log(action)
    },
    subNumber(state, action) {
      const calMinus = action.payload
      state.counte = state.counte - calMinus
      console.log(action)
    }
  }
})

export const {addNumber, subNumber} = counterSlice.actions
export default counterSlice.reducer