import { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shopcontext";
export default function Cartitems (props) {
    const {id,Pname,price,Pimage}=props.data; 
    const {addToCart,removeFromCart,cartItems,editCartItems}=useContext(ShopContext);
    return <div className="cart-items">
        <img src={Pimage} alt="" />
       <div className="cart-description">
         <p>{Pname}</p>
         <p>${price}</p> 
       <div className="countHander">
       <button onClick={()=>{removeFromCart(id)}}>-</button> 
           <input value={cartItems[id]}
           onChange={(e)=> editCartItems(Number(e.target.value),id)}
            />
         <button onClick={()=>{addToCart(id)}}>+</button>
       </div>
       </div>
    </div>
}