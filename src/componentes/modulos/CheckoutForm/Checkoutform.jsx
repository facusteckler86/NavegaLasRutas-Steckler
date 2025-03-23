/* eslint-disable react/prop-types */
import { useState } from "react";
import './CheckoutForm.css';

export const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {name, email}

        onConfirm(userData)
    };

    return(
        <div>
            <form onSubmit={handleConfirm} className="form-checkout">
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={({target})=> setName(target.value)} placeholder="Facundo" required />
                    </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={({target})=> setEmail(target.value)} placeholder="mail@gmail.com" required />
                </label>
                <div className="form-checkout__button">
                    <button type="submit" className="checkout-button">Confirmar Compra</button>

                </div>
            </form>
        </div>


    )
};

export default CheckoutForm
