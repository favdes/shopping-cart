import React,{useContext} from 'react'
import '../styles/Jewelry.css'
import useFetch from '../customHook/useFetch'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Button from "react-bootstrap/Button";
import CartContext from '../Context/CartContext';

const Jewelrys = () => {
  const {handleAddToCart} = useContext(CartContext)
    const{data,loading} = useFetch('https://fakestoreapi.com/products/category/jewelery')
    const notify = () => {
        toast("An item has been added",{
            position:toast.POSITION.TOP_CENTER 
        });
    }
  return (
    <div>
        <div className='component-title'>
            <h2>JEWELRYS CATEGORY</h2>
        </div>
        <main className='card-container-electronics my-4'>
            {data.map((datunJewelrys) =>{
                const{id,image,price,title} = datunJewelrys
                return(
                    <div key={id} className='text-center card-inner-jewelry'>
                        <Card style={{ width: "" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    <Card.Img variant="top" src={image} className="w-75" />
                    
                    </Link>
                    <Card.Body>
                      <Card.Title>{title.slice(0, 8)}</Card.Title>
                      <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                      <Button  onClick={()=>{handleAddToCart(datunJewelrys); notify()}} variant="primary" className="btn-sm">
                        Add to Cart
                      </Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>
                    </div>
                    
                
                )
            })}

        </main>
    </div>
  )
}
export default Jewelrys