import React from "react";
import './Cuadro';
import Cuadro from "./Cuadro";

import "../style/Tablero.css";
import { useState } from "react";
function Tablero() {
    function rederizarCuadro(i){
        return(
            <Cuadro
                 valor={cuadros[i]}
                 funClick={()=>click(i)}
            />
        );
    }
    const [valor, setValor] = useState("x");
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = valor;
            setCuadros(cuadrosTemp);

            if (valor === "x") {
                setValor("o");
            }
            else {
                setValor("x")
            }
        }

        //setvalor(valor ==="x"? setvalor("O"):setvalor("x"));
    }

    return(
        <div>
            <h2>Siguiente Jugador: {valor}</h2>
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