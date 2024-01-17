import React from "react";
import Tablero from "./Tablero";
import Historial from './Historial';
import { useState } from "react";
import "../style/Juego.css";
function Juego(){
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [valor, setValor] = useState("X");
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [ganador, setGanador] = useState(null);
    const [historial, setHistorial] = useState([{cuadros:Array(9).fill(null)}]);
    
    const click = (i) => {
        const nuevoMovimiento =historial.slice(0,nroMovimiento +1);
        console.log("nuevoMovimiento", nuevoMovimiento)
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length-1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        console.log("cuadrosTemp", cuadros);
        
        if (cuadros[i] === null) {
            cuadros[i] = valor;
            setCuadros(cuadros);

            if (valor === "X") {
                setValor("O");
            }
            else {
                setValor("X")
            }
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
            
        }
        if(calcularGanador(cuadros)!=null){
            setGanador(calcularGanador(cuadros));
            
        }
        
        //setvalor(valor ==="x"? setvalor("O"):setvalor("x"));
    }
    const saltarA = (movimiento) => {
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setValor(valor === "X" ? "O" : "X");

    }
    const movimientoActual = historial[nroMovimiento];
    return(
        <div className="juego">
            <div className="juego-tablero">
                <h2>Próximo jugador: {valor}</h2>
                Ganador: {ganador}
                <Tablero cuadros={movimientoActual.cuadros} Click={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />
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