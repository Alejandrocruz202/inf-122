import React from "react";
import Tablero from "./Tablero";
impoe
import { useState } from "react";

function Juego(){
    const [valor, setValor] = useState("X");
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [ganador, setGanador] = useState(null);
    
    const click = (i) => {
        
        const cuadrosTemp = [...cuadros];
        if (cuadrosTemp[i] === null) {
            cuadrosTemp[i] = valor;
            setCuadros(cuadrosTemp);

            if (valor === "X") {
                setValor("O");
            }
            else {
                setValor("X")
            }
            if(calcularGanador(cuadrosTemp)!=null){
                setGanador(calcularGanador(cuadrosTemp));
                setCuadros(Array(9).fill(null));
            }
        }

        //setvalor(valor ==="x"? setvalor("O"):setvalor("x"));
    }
    return(
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${valor}`}</h2>
                <Tablero cuadros={cuadros} Click={(i) => click(i)} />
            </div>

        </div>
    );
}
export default Juego;
function calcularGanador(cuadros){
    const lineas =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lineas.length;i++){
        const [a, b, c] = lineas[i];
    if ( cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
        return cuadros[a];
    }
    }
}