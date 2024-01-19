import React from "react";
import Form from "./Form";
import Botones from "./Boton";

import "../stilos/Login.css";
function Login(){

    const mostrar =(x) =>{
        
        console.log(x);
    }
    return(
        <div className="contenedor">
            <Form title="ususario" tipo="text"/><p/>
            <Form title="contraseña" tipo="text"/><p/>
            <div><Botones txt="Registrar"  funtionb={()=>mostrar("registrar")}/><Botones txt="ingresar" funtionb={()=>mostrar("ingresar")} /></div>
            
        </div>
        
    );
}
export default Login;