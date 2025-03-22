
import { Item } from '../Item/Item';
import './ItemList.css';

// eslint-disable-next-line react/prop-types
export const ItemList = ({products}) => {

    return(
        <div className="ListGroup">
            {products.map((prod => <Item key={prod.id}{...prod}/>))}
        </div>
    )
};