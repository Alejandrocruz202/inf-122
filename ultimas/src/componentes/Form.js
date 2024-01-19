import React from "react";
function Form({title,tipo}){
    return(
        <div>
            <p>{title}</p>
            <input type={tipo}/>
        </div>
        
    );
}

export default Form;