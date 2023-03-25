import React from 'react'
import {addToCart,removeFromCart,emptyCart} from "../redux/action";
import {useDispatch} from "react-redux";
import {Header} from '../components/Header';
const Main = () => {
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
<div>
<button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
<div>
<button onClick={()=>dispatch(removeFromCart(product.name))}>Remove from Cart</button>
</div>
<div>
<button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
</div>
   </div>
   </>
  )
}

export default Main