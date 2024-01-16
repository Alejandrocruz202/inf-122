
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {
  const [show,setshow]=useState(true);
  const[nrocliks, setNumclicks] = useState(0);
  const mostrar=()=>{ 
    setshow(!show)
  }

  const click=()=>{
    setNumclicks(nrocliks+1)
    
  }
  const reiniciar=()=>{
    setNumclicks(0);
    
  }
  const menos1=()=>{
    setNumclicks(nrocliks-1)
    
  }
  const mas3=()=>{
    setNumclicks(nrocliks+3)
    
  }
  const menos3=()=>{
    setNumclicks(nrocliks-3)
    
  }
  return (
    <div className="contenedor-prncipal">
      <Contador nrocliks={nrocliks } show   />
        <div className="contenedor-de-botones">
          
          <div className='listb'><Boton  text="-3" esBotonClick={true} funcionClik={menos3}/>
          <Boton  text="+3" esBotonClick={true} funcionClik={mas3}/>
          <Boton  text="-1" esBotonClick={true} funcionClik={menos1}/>
          <Boton  text="+1" esBotonClick={true} funcionClik={click}/></div>
          <Boton text="REINICIAR" esBotonClick={false} funcionClik={reiniciar}/>
          <Boton text="mostrar ocultar" esBotonClick={false} funcionClik={mostrar}/>
        </div>
        

    </div>
  );
}

export default App;
