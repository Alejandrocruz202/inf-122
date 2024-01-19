import React from "react";
import Form from "./Form";
import Botones from "./Boton";
function Registro(){
    const mostrar =(x) =>{
        
        console.log(x);
    }
    return(
        <div className="contenedor">
            <Form title="ususario"/><p/>
            <Form title="apellido"/><p/>
            <Form title="contraseña" tipo="password"/><p/>
            <div>
                <Botones txt="registrar"  funtionb={()=>mostrar("registrar")}/>
            </div>
        </div>
    )
}
export default Registro;