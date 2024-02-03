import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shopcontext";
import { Products } from "../../products";
import Cartitems from "./cartitems";
import { useNavigate} from "react-router-dom";
export default function Cart() {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount(); 
  const navigate=useNavigate();
   const [isTrue,setIsTrue]=useState(false);
   const [isChange,setIsChange]=useState(false);
  return (
    <div className="cart">
      <div className="cartText">
        <p>Your cart items</p>
      </div>
      <div className="cartItems">
       {Products.map((product)=>{
        if (cartItems[product.id]!==0) {
          return <Cartitems data={product} />
        }
       })}
      </div>
      {totalAmount>0?(
      <div className="checkout">
       <p>Subtotal:${totalAmount}</p>
       <button
         className={`${isChange ?'btnMouseOver':'btnMouseOut'}`}
       onMouseOver={()=>setIsChange(true)}
       onMouseOut={()=>setIsChange(false)}
       onClick={()=>navigate('/')
       }>Continue Shopping</button>
       <button
        className={`${isTrue ?'btnMouseOver':'btnMouseOut'}`}
         onMouseOver={()=>setIsTrue(true)}
         onMouseOut={()=>setIsTrue(false)}
         >Checkout</button>
      </div>
      ):<h1>cart Item is empty</h1>     
}
    </div>
  );
}