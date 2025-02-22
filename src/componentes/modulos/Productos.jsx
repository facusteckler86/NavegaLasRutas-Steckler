import data from "../../db";
import "../../../src/App.css";
import {Link} from "react-router-dom";

const Productos = () => {
  return (
    <>
      <h2 className="Productos.title">Productos</h2>
      
      <div className="galeria">
        {data.map((Productos) => {
          return (
                <article key={Productos.id}>
                  <h5>{Productos.title}</h5>
                  <img src="{Productos.image}" alt="Productos.description"/>
                  <Link to="{`/Productos/${Productos.id}`}">Comprar</Link>

                </article>

          );
        })}
      </div>
    </>
  );
};

export default Productos;
