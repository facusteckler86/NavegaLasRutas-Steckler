import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="button-item-count" onClick={decrement}>
          -
        </button>
        <h4 className="number-item-count">{quantity}</h4>
        <button className="button-item-count" onClick={increment}>
          +
        </button>
      </div>
      <div className="button-counter-container">
        <button className="button-agregar" onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
