import "../../../src/App.css";
//import { FaHome } from "react-icons/fa";
//import { IoMdExit } from "react-icons/io";
//import { IoMdContact } from "react-icons/io";
//import { MdOutlineProductionQuantityLimits } from "react-icons/md";
//import { IoIosAlbums } from "react-icons/io";
import Productos from "./Productos";
//import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="superior">
      <h1 className="homeTitle">Panaderia Doña Pepa</h1>
      <>
      {/* <div className="navbar-start">  
        <NavLink to={`/Main`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Home</NavLink>
        <NavLink  to={`/Productos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Productos</NavLink>
        <NavLink to={`/category/camperas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Contacto</NavLink>
        <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Salir</NavLink>
    </div> */}
      </>
      <>
        <Productos />
      </>
    </div>
  );
};

export default MainPage;


