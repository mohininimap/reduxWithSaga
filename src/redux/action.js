import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from './constant';

    export const addToCart=(data)=>{
        console.log("action called",data)
        return {
            type:'ADD_TO_CART',
            data:data
        }
    }
    export const removeFromCart=(data)=>{
        console.log("action called",data)
        return {
            type:'REMOVE_FROM_CART',
            data:data
        }
    }

    export const emptyCart=(data)=>{
        console.log("action called",data)
        return {
            type:'EMPTY_CART',
           
        }
    }