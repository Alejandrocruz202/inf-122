import './App.css';
import Boton from "./componentes/Boton";
import { useState } from "react";
function App() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    
    <div className="container">
      <h1>Timer</h1>
      <span>{Math.trunc(timer / 60)} mins </span>
      <span>{timer % 60} secs</span>
      <div>
        <Boton className="verde" texto="start" funtion={startTimer}/>
        <Boton className="amarillo" texto="stop" funtion={stopTimer}/>
        <Boton className="rojo" texto="reset" funtion={resetTimer}/>
        
      </div>
    </div>
  );
}

export default App;
