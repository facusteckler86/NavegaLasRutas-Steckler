import { FaHome } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <h2>Panaderia Doña Pepa</h2>
      </div>
      <ul>
        <li>
          <FaHome /> Home
        </li>
        <li>
          <IoIosAlbums /> Productos
        </li>
        <li>
          <IoMdContact /> Contacto
        </li>
        <li>
          <MdOutlineProductionQuantityLimits /> Carrito
        </li>
        <li>
          <IoMdExit /> Salir
        </li>
      </ul>
    </>
  );
};

export default NavBar;
