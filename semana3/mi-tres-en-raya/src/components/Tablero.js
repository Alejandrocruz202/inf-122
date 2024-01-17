import React from "react";
import './Cuadro';
import Cuadro from "./Cuadro";

import "../style/Tablero.css";
import { useState } from "react";
function Tablero({ cuadros, Click }) {
    function rederizarCuadro(i){
        return(
            <Cuadro
                 valor={cuadros[i]}
                 funClick={()=>Click(i)}
            />
        );
    }
   
    return(
        <div>
            
            <div className="tablero">
                
                {rederizarCuadro(0)}
                {rederizarCuadro(1)}
                {rederizarCuadro(2)}
                {rederizarCuadro(3)}
                {rederizarCuadro(4)}
                {rederizarCuadro(5)}
                {rederizarCuadro(6)}
                {rederizarCuadro(7)}
                {rederizarCuadro(8)}
  
            </div>
        </div>
        
    );
}
export default Tablero;