
import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from './constant';
export const cartData=(data=[],action)=>{

    // if(action.type===ADD_TO_CART){
    //     console.warn("reduncer called",action)
    //     return action.data
    // }else{
    //     return "no action matched"
    // }

    switch(action.type){
      case ADD_TO_CART:  
      console.log("ADD_TO_CART CONDITION",action)
      return [action.data,...data ]

      case REMOVE_FROM_CART:  
      console.log("REMOVE_FROM_CARt CONDITION",action)
      data.length=data.length-1;
      return [...data]

      case EMPTY_CART:  
      console.log("EMPTY CART",action)
   data=[]
      return [...data]

      default:
        return data;
    }

}