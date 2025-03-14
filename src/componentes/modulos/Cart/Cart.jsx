import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);

    if(cart.length === 0) {
        return (
            <div className="carro-vacio">
                <h2>Carrito de Compras</h2>
                <p>El Carrito esta vacio.</p>
                <Link clasName="boton vacio"  to="/Productos">Volver a la tienda</Link>
            </div>
        );
    }
return(
    <div className='carrito-lleno'>
    {cart.map(p => <CartItem key={p.id} item={p}/>)}
    <div className='checkout-container'>
        <h3>Total: ${total}</h3>
        <div className='checkout-buttons-container'>
            <button onClick={()=> clearCart()} className='button'>Limpiar carrito</button>
            <Link to='/checkout' className='checkout-button'>Checkout </Link>
        </div>
    </div>
</div>
)
}

export default Cart;