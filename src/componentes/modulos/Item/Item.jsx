import { Link } from "react-router-dom";

export const Item = ({ id, title, image, price, stock }) => {
  return (
    <article className="cardItem">
      <header className="headerItem">
        <h2 className="itemHeader">{title}</h2>
      </header>
      <div className="itemImgContainer">
            <img src={image} alt={title} className="itemImg" />
      </div>
      <section className="sectionItem">
        <p className="infoItem">
            Precio: $ {price}
        </p>
        <p className="infoItem">
            Stock: {stock}
        </p>
      </section>
      <footer className="itemfooter">
        <Link to={`/item/${id}`} className="option"><strong>Ver Detalle</strong>
         </Link>
      </footer>
    </article>
  );
};
