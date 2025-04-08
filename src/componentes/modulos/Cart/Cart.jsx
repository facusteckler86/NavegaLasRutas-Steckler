import { useContext } from "react";
import "./Cart.css";
//import { useNavigate } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoProvider } from "../Context/CarritoProviders";

export const Cart = () => {
    const { listaCompras: cart, clearCart } = useContext(CarritoProvider);
    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    if(cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Carrito de Compras</h2>
                <p>El Carrito esta vacio.</p>
                <Link className="button empty" to="/products">Volver a la tienda</Link>
            </div>
        );
    }

    return(
        <div className='cart-full'>
            {cart.map(p => <CartItem key={p.id} item={p}/>)}
            <div className='checkout-container'>
                <h3>Total: ${total}</h3>
                <div className='checkout-buttons-container'>
                    <button onClick={clearCart} className='button'>Limpiar carrito</button>
                    <Link to='/checkout' className='button checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}
