import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import NavBar from "./Layouts/NavBar";
import SingleProduct from "./Page/SingleProduct";
import { useEffect, useState } from "react";
import Footer from "./Layouts/Footer";
// const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []





function App() {
//   const [cart, setCart] = useState(cartItemsFromLocalStorage);
//   useEffect(()=>{
//   localStorage.setItem('cart'
// ,JSON.stringify(cart)) 
//  },[cart])
  



  // let handleAddToCart = (product) => {
  //   const productSelected = cart.find(
  //     (singleCart) => singleCart.id === product.id
  //   );
  //   if (productSelected) {
  //     setCart(
  //       cart.map((oneItem) =>
  //         oneItem.id === product.id
  //           ? {
  //               ...productSelected,
  //               quantity: productSelected.quantity + 1,
  //             }
  //           : oneItem
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1}]);
  //   }
  // };

  return (
    <>
      <BrowserRouter>
        <NavBar  />
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route path="/Cart" element={<Cart/>} />
          <Route
            path="/SingleProduct/:id"
            element={
              <SingleProduct />
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <BrowserRouter>
        <NavBar cart={cart} />
        <Routes>
          <Route
            index
            element={<Home cart={cart} handleAddToCart={handleAddToCart} setCart={setCart} />}
          />
          <Route path="/Cart" element={<Cart cart={cart}  setCart={setCart} />} />
          <Route
            path="/SingleProduct/:id"
            element={
              <SingleProduct cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart} />
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
