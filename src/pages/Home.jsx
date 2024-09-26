import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from '../features/counterSlice'
import { fetchHomedata } from '../features/homeSlice'

const Home = () => {
  const counte = useSelector(state => state.counter.counte)
  const banners = useSelector(state => state.home.banners)

  const dispatch = useDispatch()

   useEffect(() => {
     dispatch(fetchHomedata())
   }, [dispatch])
  

  return (
    <div className='wrap'>
      <p>Home Counter: {counte}</p>
      <button onClick={() => dispatch(addNumber(5))}>+5</button>
      <button onClick={() => dispatch(subNumber(5))}>-5</button>

      <div className='banner'>
        <h2>Home组件里轮播图图片展示</h2>
        <ul>
          {banners &&
            banners.map((banner, index) => {
              return (
                <li key={index}>
                  <img src={banner.image} alt="bannerImage" />
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default Home