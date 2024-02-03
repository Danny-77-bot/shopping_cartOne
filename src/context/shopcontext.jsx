import React,{createContext, useState} from "react";
import { Products } from "../products";
export const ShopContext=createContext(null);
const getDefualtCart=()=>{
    const cart={};
    for(let i=1;i<Products.length+1;i++) {
        cart[i]=0;
    }
    return cart;
}
export const ShopContextProvider =(props)=>{
    console.log(props.children);
    const [cartItems,setCartItems]=useState(getDefualtCart());

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                let itemInfo=Products.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price
            }
        }
        return totalAmount;
    };
    const addToCart=(itemId)=>{
       setCartItems((prevItem)=>({...prevItem,[itemId]:prevItem[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
       setCartItems((prevItem)=>({...prevItem,[itemId]:prevItem[itemId]-1}))
    }
    const editCartItems=(newAmount,itemId)=>{
        setCartItems((prevItem)=>({...prevItem,[itemId]:newAmount}))
    }
    const contextItems={cartItems,addToCart,removeFromCart,editCartItems,getTotalCartAmount};
    return <ShopContext.Provider value={contextItems}>{props.children}</ShopContext.Provider>
}