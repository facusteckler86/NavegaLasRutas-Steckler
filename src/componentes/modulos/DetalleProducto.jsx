import {Link, useParams} from "react-router-dom";
import data from "../../db";

function DetalleProductos() {

    
    const {productosId} = useParams();
    const productos = data.find((prod)=>prod.id == productosId);
    const {image, price,title,description} = productos;
    
    
    return(
        

        
        <div>
            <h2>Detalles de Productos</h2>
            <img src={image} />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <Link to="/productos">Volver</Link>

        </div>
    )
}

export default DetalleProductos;