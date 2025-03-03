import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./componentes/Home/HomePage";
import MainPage from "./componentes/modulos/mainPage";
import Error from "./componentes/modulos/Error";
import Productos from "./componentes/modulos/Productos";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "./componentes/modulos/Context/CarritoContex";
import DetalleProductos from "./componentes/modulos/DetalleProducto"
import Carrito from "./componentes/modulos/Carrito"
//import { collection } from "firebase/firestore";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
        <div className="navbar-start">
          <NavLink
            to={`/Main`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Home
          </NavLink>
          <NavLink
            to={`/Productos`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Productos
          </NavLink>
          <NavLink
            to={`/Carrito`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Carrito
          </NavLink>
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Salir
          </NavLink>
        </div>
        </div>
      </nav>
      
      
      
      <CarritoContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route
            path="/Productos/: ProductosId"
            element={<DetalleProductos />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </CarritoContext>
      
      <footer className="footer">
        <a href="https://www.linkedin.com/in/facundomsteckler/" target="_blank">
          facusteckler86
        </a>
      </footer>
    </BrowserRouter>
  );
};

export default App;
