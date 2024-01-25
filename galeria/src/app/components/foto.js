"use client"

import Image from "next/image";
import { useEffect , useState } from "react";
import style from "./foto.module.css";
function Foto(){
    const [perrito,setPerrito]=useState("/vercel.svg");
    const [estado , setEstado]=useState("esperando");
    const [habilidades,setHabilidades]=useState("esperando")
    const url = "https://pokeapi.co/api/v2/pokemon/meowth";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPerrito(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidades(data.abilities[0].ability.name)})
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <h2>{habilidades}</h2>
            <Image src={perrito} height={300} width={300}/>
        </div>
    );
}
export default Foto;