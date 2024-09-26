import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import homeReducer from '../features/homeSlice'


const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})

export default store