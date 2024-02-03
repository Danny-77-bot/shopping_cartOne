import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";

export default function Product (props) {
    const {id,Pname,price,Pimage}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext)
    const cartItemAmount=cartItems[id];
    return <div className="product">
        <img src={Pimage} />
        <div className="description">
          <p>{Pname}</p>
          <p>${price}</p>
          <button onClick={()=>addToCart(id)}
           className="Pbtn">Add to cart {cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
        </div>
    </div>
}