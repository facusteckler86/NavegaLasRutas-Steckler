import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "../src/componentes/modulos/Context/CarritoProviders";
import { NavBar } from "./componentes/modulos/NavBar/NavBar";
import { ItemListContainer } from "./componentes/modulos/ItemListContainer/ItemListContainer";
import { Cart } from "./componentes/modulos/Cart/Cart";
import { Checkout } from "./componentes/modulos/CheckOut/Checkout";
import HomePage from "./componentes/Home/HomePage";
import { Error } from "./componentes/modulos/Error";

export function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="//" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

