import db from "../../db";
import "../../../src/App.css";
import {Link} from "react-router-dom";

const Productos = () => {
  return (
    <>
      <h2 className="productos.title">Productos</h2>
      <div className="galeria">
        {db.map((Productos) => {
          return (
                <article key={Productos.id}>
                  <h5>{Productos.title}</h5>
                  <img src="{Productos.image}" alt="Productos.description"/>
                  <Link>Comprar</Link>

                </article>

          );
        })}
      </div>
    </>
  );
};

export default Productos;
