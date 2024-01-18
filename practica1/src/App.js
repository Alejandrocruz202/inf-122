
import './App.css';
import Boton from "./componentes/Boton";
import Texto from "./componentes/Texto";
import { useState } from 'react';
function App() {
  const [show,setShow]= useState(true);
  const ver=()=>{
    setShow(!show)
  };
  return (
    <div className="caja">
      <Boton funtion={ver}/>
      {show ? <Texto/> : null}
    </div>
    
  );
}

export default App;
