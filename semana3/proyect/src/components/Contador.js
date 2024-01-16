import React from "react";
import "../style/Contador.css";

function Contador({nrocliks}){
    return(
        <div className='contador'>{nrocliks}</div>
    );
}
function contador({nrocliks,mostrar}){
    return mostrar ? <div className="contador">{nrocliks}</div> :null
}
export default Contador