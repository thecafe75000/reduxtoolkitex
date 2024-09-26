import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from '../features/counterSlice'
import {fetchHomedata} from '../features/homeSlice'

const Profile = () => {
  const counte = useSelector(state => state.counter.counte)
  const banners = useSelector(state => state.home.banners)
  const recommends = useSelector(state => state.home.recommends)
  console.log('banners of home component', banners)
  console.log('recommends of home component', recommends)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomedata())
  }, [dispatch])
  
  
  return (
    <div className='wrap'>
      <p>Profile Counter: {counte}</p>
      <button onClick = {()=> dispatch(addNumber(10))}>+10</button>
      <button onClick={() => dispatch(subNumber(10))}>-10</button>
      
      <div className='banner'>
        <h2>Profile组件里轮播图数据展示</h2>
        <ul>
          {
            banners && banners.map((banner, index) => {
              return (
                <li key={index}>{banner.title}</li>
              )
            })
          }
        </ul>
      </div>
      <div className='banner'>
        <h2>Profile组件里推荐数据展示</h2>
        <ul>
          {
            recommends && recommends.map((recommend, index) => {
              return (
                <li key={index}>{ recommend.title}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Profile