import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import image from "../Nav/rym-navbar.png"

const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => { //funcion para cerrar sesion
        setAccess(false)     
    }

    return (     //NOTA--CUANDO LE DE ESTILOS, PUEDO USAR SOLO LAS NAVLINK EN VEZ DE BOTONES
        <nav className={Style.nav}>
            <NavLink to={"/home"}>
                <img src={image} alt="rym" className={Style.image} />
            </NavLink>
            
            <SearchBar onSearch={onSearch} />

            <ul className={Style.lista}>
                <li className={Style.li}>
                    <NavLink to={"/home"} className={Style.navLink}>Home</NavLink>
                </li>

                <li className={Style.li}>
                    <NavLink to={"/favorites"}  className={Style.navLink}>Favorites</NavLink>
                </li>

                <li className={Style.li}>
                    <NavLink to={"/about"} className={Style.navLink}>About</NavLink>
                </li>
            </ul>
           
            
                
            
            

            <NavLink to={"/"} onClick={handleLogOut} className={Style.logOut}>Log Out</NavLink>
            {/* <button onClick={handleLogOut}>Log Out</button> */}
                       
        </nav>
    )
}

export default Nav