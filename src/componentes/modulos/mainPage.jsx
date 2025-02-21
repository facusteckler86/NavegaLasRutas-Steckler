import "../../../src/App.css";
import { FaHome } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import "./itemListContainer"
import ProductCard from "./productCard";


const MainPage = () => {
    return (
        <div>
            <h1>Panaderia Doña Pepa</h1>
            <>
                 <ul className="navbar-menu">
                    <li  className="navbar-item">
                      <FaHome /> Home
                    </li>
                    <li className="navbar-item">
                      <IoIosAlbums /> Productos
                    </li>
                    <li className="navbar-item">
                      <IoMdContact /> Contacto
                    </li>
                    <li className="navbar-item">
                      <MdOutlineProductionQuantityLimits /> Carrito
                    </li>
                    <li className="navbar-item">
                      <IoMdExit /> Salir
                    </li>
                  </ul>
                </>
              {/* Aca va el main de mi proyecto */}
                <>
                <itemListContainer />
                <ProductCard />
                </>
        </div>
    );
}


export default MainPage;