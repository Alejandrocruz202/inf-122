import React from "react";
import './Cuadro';
import Cuadro from "./Cuadro";

import "../style/Tablero.css";
import { useState } from "react";
function Tablero(){
    const[valor,setValor]=useState("x");
    const click =()=>{
        if (valor==="x") {
            setValor("o");
        }
        else{
            setValor("x")
        }
        //setvalor(valor ==="x"? setvalor("O"):setvalor("x"));
    }
    return(
        <div className="tablero">
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />
            <Cuadro valor={valor} funClick={click} />

        </div>
    );
}
export default Tablero;