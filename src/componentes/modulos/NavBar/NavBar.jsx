
import '../../../App.css';
import { NavLink } from "react-router-dom";


export const NavBar = () => {

    

    return(
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
            to={`/Products`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            products
          </NavLink>
          <NavLink
            to={`/Cart`}
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

    )
}