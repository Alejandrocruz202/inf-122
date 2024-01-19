import React from "react";
function Form({title,tipo}){
    return(
        <div>
            <p>{title}</p>
            <input type={tipo}></input>
        </div>
        
    );
}

export default Form;