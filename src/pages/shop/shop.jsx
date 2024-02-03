import { Products } from "../../products"
import "./shop.css";
import Product from "./product"
export default function Shop () {
    return <div className="shop">
         <div className="title">Dannies Shoping Tech</div>
        <div className="products">
         {Products.map((product)=>(
            <Product  data={product}/>
         ))}
        </div>
    </div>
}