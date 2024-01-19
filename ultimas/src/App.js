
import Login from "./componentes/Login"
import Regitro from "./componentes/Registro";
import Perfil from "./componentes/Perfil";
import Navbar from "./componentes/Navbar";
import{BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="caja">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Regitro/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
          </Routes>
        </div>
      </Router>
    </div>
    
    
  );
}

export default App;
