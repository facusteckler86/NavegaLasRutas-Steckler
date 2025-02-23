import {Link, useParams} from "react-router-dom";
import data from "../../db";

function DetalleProductos() {

    
    const {ProductosId} = useParams();
    const Productos = data.find((prod)=>prod.id == ProductosId);
    const {image, price,title,description} = Productos;
    
    
    return(
        

        
        <div>
            <h2>Detalles de Productos</h2>
            <img src={image} />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <Link to="/Productos">Volver</Link>

        </div>
    )
}

export default DetalleProductos;