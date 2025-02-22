import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./componentes/Home/HomePage";
import MainPage from "./componentes/modulos/mainPage";
import Error from "./componentes/modulos/Error";
import Productos from "./componentes/modulos/Productos"
import DetalleProducto from "./componentes/modulos/DetalleProducto";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navBar">
        Barra
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Productos/: ProductosId" element={<DetalleProducto/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/facundomsteckler/" target="_blank">Facusteckler86</a>
      </footer>
    </BrowserRouter>
  );
};

export default App;
