import React from "react";
import "../style/Contador.css";

function Contador({nrocliks}){
    return(
        <div className='contador'>{nrocliks}</div>
    );
}

export default Contador;