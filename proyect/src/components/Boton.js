import React from "react";
import '../style/Boton.css';

function Boton({text, esBotonClick,funcionClik}){
    return(
        <button className={esBotonClick ? "boton-click" : "boton-reiniciar"} onClick={funcionClik}>
            {text}
        </button>
    );
};
export default Boton;