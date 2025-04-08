import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";


// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const {CategoryId} = useParams();

    useEffect(() => {

        
        const collectionRef = CategoryId
        ? query(collection(db, "products"), where ("Category", "==", CategoryId))
        : collection(db, "products");

        getDocs(collectionRef).then(response =>{
            const productsAdapted = response.docs.map(doc=>{
                const data = doc.data();
                return{id: doc.id, ...data}
            })
            setProducts(productsAdapted);
        }) 
        .catch((error)=>{
            console.error(error);
        })
    }, 
    
    [CategoryId]);

    return(
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>

    )

}
