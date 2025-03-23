import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ id, title, image, description, price, stock }) => {
  
    const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CarritoContext);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);

    const item = { id, title, price };
    addItem(item, quantity);
  };

  return (
    <article className="cardItemDetail">
      <header className="headerItemDetail">
        <h3 className="titleItemDetail">{title}</h3>
      </header>
      <main className="mainItemDetail">
        <div className="imgContainerItemDetail">
          <img src={image} alt={title} className="imgItemDetail" />
        </div>
        <section className="sectionItemDetail">
          <p className="infoItemDetail">Descripción: {description}</p>
          <p className="infoItemDetail">Precio: {price}</p>

          <footer>
            {
              // eslint-disable-next-line no-undef
              quantityAdded > 0 ? (
                <Link to="/Cart" className="Option">
                  Finalizar la Compra
                </Link>
              ) : (
                <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
              )
            }
          </footer>
        </section>
      </main>
    </article>
  );
};
