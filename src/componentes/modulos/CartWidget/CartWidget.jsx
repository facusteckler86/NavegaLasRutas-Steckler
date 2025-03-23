import { useContext } from "react"
import {FaBagShopping} from "react-icons/fa"
import { CarritoContext } from "../../context/CarritoContext"
import "./CartWidget.css"


export const CartWidget = ()=>{
    const {totalQuantity} = useContext(CarritoContext)

    return(
        <link to="/Cart" className="cartWidget" style={{
            display: totalQuantity > 0 ? "block" : "none"
        }}><FaBagShopping className="carrito"/>
        {totalQuantity}
        </link>
    )
}

