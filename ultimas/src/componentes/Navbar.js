import React from "react";
import { Link } from "react";
import { Outlet } from "react-router-dom";
function Navbar() {
    return (
        <>
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
            <Outlet />
        </>
    );
}
export default Navbar;