import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Electronic from '../component/Electronic'
import Women from '../component/Women'
import LastPage from '../component/LastPage'
import Jewelrys from '../component/Jewelrys'

const Home = ({cart,handleAddToCart,setCart}) => {
    useEffect(()=>{
        document.title = 'Home | Page'
    })
  return (
    <div className='container'>
      <Hero/>
      <Electronic/>
      <Women />
      <Jewelrys />
      <LastPage/>

      {/* <Hero cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>
      <Electronic cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
      <Women handleAddToCart={handleAddToCart}/>
      <Jewelrys  handleAddToCart={handleAddToCart}/>
      <LastPage/> */}

    </div>
  )
}

export default Home