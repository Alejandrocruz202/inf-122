import React from "react";
import "../styles/Boton.css";
function Boton({funtion,texto}){
    return(
        <button className="boton" onClick={funtion}>{texto}</button>
    );
}
export default Boton;