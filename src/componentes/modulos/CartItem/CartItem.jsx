import {useContext} from 'react'
import {CarritoContext} from '../../modulos/Context/CarritoContex'
import './CartItem.css'

export const CartItem = (item) => {

    const {removeItem} = useContext(CarritoContext)

    return(
        <div className="item-container">
            <h3>{CartItem.title}</h3>
            <div className='item-cantidad'>
                <p>Precio por unidad: {item.price}</p>
                <p>Cantidad: {item.quantity}</p>
            </div>
            <div className='item-total-container'>
                <p>SubTotal: {(item.quantity*item.price).toFixed(2)}</p>
                <button onClick={()=> removeItem(item.id)} className='item-button'>Borrar</button>
            </div>

        </div>

    )
}