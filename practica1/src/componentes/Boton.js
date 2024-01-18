import React from "react";
import "../style/Boton.css";
function Boton({funtion}){
    return(
        <button className="boton" onClick={funtion}>Show/Hide</button>
    );
}
export default Boton;