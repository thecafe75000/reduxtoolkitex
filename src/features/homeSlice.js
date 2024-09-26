import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
  banners: [],
  recommends:[]
}

const url = 'http://123.207.32.32:8000/home/multidata'

export const fetchHomedata = createAsyncThunk('home/commondata', async () => {
  try {
    const response = await axios.get(url)
    console.log('response data',response.data)
    return response.data
  } catch (error) {
    console.log('fetch homedata error', error)
    throw error
  }
 
})


const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomedata.fulfilled, (state, { payload }) => {
        state.banners = payload.data.banner.list
        state.recommends = payload.data.recommend.list
        console.log('banners', payload.data.banner.list)
        console.log('recommends', payload.data.recommend.list)
      })
      .addCase(fetchHomedata.rejected, (state, action) => {
        console.log('action error', action.error.message)
      })
  }
})


export default homeSlice.reducer