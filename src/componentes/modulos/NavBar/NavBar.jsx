import { useContext } from "react";
import '../../../App.css';
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../Context/CarritoContex";

export const NavBar = () => {

    const {ListaCompras} = useContext(CarritoContext)

    return(
        <div className="navbar-start">  
        <NavLink to={`/Main`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Home</NavLink>
        <NavLink  to={`/Productos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Productos</NavLink>
        <NavLink to={`/Carrito`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Carrito</NavLink>
        <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Salir</NavLink>
    </div>
    )
}