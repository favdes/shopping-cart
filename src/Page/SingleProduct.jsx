import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../customHook/useFetch";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const SingleProduct = () => {
  const {handleAddToCart} = useContext(CartContext)
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const{title,price,image,description} = data
  const notify = () => {
    toast("An item has been added",{
        position:toast.POSITION.TOP_CENTER 
    });
}
useEffect(()=>{
  document.title = `product | ${title}`
})


  return (
    <div className="container">
      <h2>{loading && <ClipLoader color={'red'} size={50} />}</h2>
      <div className=" row justify-content-between align-items-center mt-4">
        <div className="col-sm-12 text-center col-md-4">
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={image} className=" hero-img" />
          </Card>
        </div>

        <div className="col-sm-12 col-md-7">
            <h1 className="text-danger fw-bold">{title}</h1>
            <h4 className="text-success lh-base">{description}</h4>
            <h3>{price}</h3>
            <button onClick={()=>{handleAddToCart(data);notify()}} className="btn btn-primary btn-lg w-50 ">Add to Cart</button>
        <ToastContainer/>
        </div>
        
      
      </div>
    </div>
  );
};

export default SingleProduct;
