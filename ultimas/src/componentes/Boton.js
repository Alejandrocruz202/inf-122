import React from "react";
function Botones({txt,funtionb}){
    return(
        <button onClick={funtionb}>{txt}</button>
    );
}
export default Botones;