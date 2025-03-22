import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); 
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          const productAdapted = { id: doc.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log("El producto no existe.");
        }
      })
      .catch((error) => {
        console.log("Error al obtener el producto:", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [itemId]);

  if (loading) {
    return <h2 className="loading">Cargando producto...</h2>;
  }

  if (!product) {
    return <h2 className="error">Producto no encontrado.</h2>;
  }

  return (
    <div className="itemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};