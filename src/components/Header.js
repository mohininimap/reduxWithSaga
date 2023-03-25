import { useSelector } from "react-redux"
import { cartData } from './../redux/reducer';

export const Header=()=>{
    const result=useSelector((state)=>state.cartData);
    console.log("redux data in header",result)
    return(
        <div className="header">
            <div className="cart-div">
            <span>{result.length}</span>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
        </div>
    )
}