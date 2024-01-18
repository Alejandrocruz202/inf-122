import React from "react";
import Add from "./Add";
import { useState } from "react";
function Lista(){
    const [sw,setSw]=useState(false);
    return(
        <div>
            <input
                className="input"
                type="text"
                
            />
            <button className='boton' >add</button>
            <ol>
                <Add texto="yo"/><button className='boton' >X</button>
            </ol>
        </div>
    );
}
export default Lista;