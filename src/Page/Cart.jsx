import React, { useEffect } from 'react'
import { useContext } from 'react';
import Card from "react-bootstrap/Card";
import CartContext from '../Context/CartContext';

const Cart = () => {
  const {cart,setCart,handleIncrease,handleDecrease,totalPrice} = useContext(CartContext)
  
  useEffect(()=>{
      
        document.title = 'Cart | Page'
  })

   return (
    <div className='contaimer'>
     <div>
        {cart.length === 0 &&(
          <div className='text-center '>
            <h3 className='fs-1 fst-italic fw-bolder text-danger'>No item(s) in the cart</h3>
            <p className='fw-bolder text-success'>keep shopping....</p>
            <hr />
          </div>
        )}
      </div>
      <main>
      {cart.map((singleCart)=>{
          const {image,id,title,price,quantity,description} =singleCart
          return(
            <div key={id} className='row justify-content-between align-items-center my-4 shadow p-5'>
              <div className='col-md-5 text-center'>
                <img src={image} alt={title} className='w-75 ' />
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-between'>
                <h2 className='text-danger'> {title} </h2>
                <div>
                  <h4> {quantity} * {price} </h4> 
                  <div className='d-flex justify-content-between'>
                    <div>
                    <button onClick={()=>handleIncrease(singleCart)} className="btn btn-success btn-lg ">
                      increase
                    </button>
                    </div>
                   <div>
                   <button onClick={()=>handleDecrease(singleCart)} className="btn btn-danger btn-lg ">
                      decrease
                    </button>
                   </div>
                  </div>
                </div>
              </div>
              

            </div>
          )
        })}
        <div className='text-center'>
          {cart.length >= 1 && (
            <div>
              <button
                onClick={() => setCart([])}
                className='w-50 btn btn-danger mt-5 fs-5 fw-bold'
              >
                {cart.length === 1 ? 'clear item' : 'clear All'}
              </button>
            </div>
          )}

          <div>

          {totalPrice === 0 ? '' : <div>
            <h1> Total Price </h1>
            <div>
              <h2>$ {totalPrice} </h2>
            </div>
            </div> }
          </div>
        </div>
      </main>

    </div>
  )
}

export default Cart