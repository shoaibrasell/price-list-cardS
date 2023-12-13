import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import PriceList from './component/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-7xl text-center text-purple-500 py-4'>Hello From Tailwind</h1>
    <PriceList></PriceList>  
    </>
  )
}

export default App
