import React from "react";
import {Link} from "react";
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/registro">Refitro</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;