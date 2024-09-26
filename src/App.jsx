import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './style.css'


function App() {
  const counter = useSelector(state => state.counter)
  // console.log(counter.counte)
  
  return (
    <div>
      <h2>App Counter: {counter.counte} </h2>
      <div className='pages'>
          <Home />
          <Profile />
      </div>
    </div>
  )
}

export default App;
