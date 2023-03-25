import React from 'react'
import {addToCart} from "./redux/action";
import {useDispatch} from "react-redux";
import {Header} from './components/Header';
const View1 = () => {
    const dispatch=useDispatch();
    const product={
        name:"I phone",
        type:"mobile ",
        price:10000,
        color:"red"
    }
  return (
   <>
<Header/>
   <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
   </>
  )
}

export default View1