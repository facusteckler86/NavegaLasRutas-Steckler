import { useContext, useState } from "react";
import { CarritoContext } from "../Context/CarritoContex";
import { db } from "../../firebase";
import { addDoc, collection, getDocs, query, Timestamp, where, writeBatch } from "@firebase/firestore";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm"; // Fixed casing
//import { CarritoContext } from "../Context/CarritoContex";

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [ setError] = useState(null); // Added error state

  const { cart, total, clearCart } = useContext(CarritoContext);

  const createOrder = async ({ name, email }) => { // Changed to camelCase
    setError(null); // Reset error state
    
    if (!name || !email) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((item) => item.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(query(productsRef, where("id", "in", ids)));
      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const product = doc.data();
        const item = cart.find((item) => item.id === doc.id);

        if (!item) return; 

        if (product.stock >= item.quantity) {
          batch.update(doc.ref, { stock: product.stock - item.quantity });
        } else {
          outOfStock.push({ ...product, id: doc.id });
        }
      });

      if (outOfStock.length === 0) {
        const order = await addDoc(collection(db, "orders"), objOrder);
        await batch.commit();
        setOrderId(order.id);
        clearCart();
      } else {
        console.log("Sin stock:", outOfStock);
      }
    } catch (error) {
      console.log("Error al crear la orden:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="pantalla-de-carga">Cargando...</h2>;
  }

  if (orderId) {
    return (
      <h2 className="compra-completa">
        Gracias por comprar en Doña Pepa, el id de tu compra es: <strong>{orderId}</strong>
      </h2>
    );
  }

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};





