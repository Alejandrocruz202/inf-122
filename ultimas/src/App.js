
import Login from "./componentes/Login"
import Regitro from "./componentes/Registro";
import Perfil from "./componentes/Perfil";
import Navbar from "./componentes/Navbar";
import{BrowserRouter as Router,Route, Switch} from ;
import './App.css';


function App() {
  return (
    <div className="caja">
      <Router>
          <div>
              <Navbar/>
              <switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/login" exact component={Login}/>
                  <Route path="/registro" exact component={Regitro}/>
                  <Route path="/perfil" exact component={Perfil}/>
              </switch>
          </div>
      </Router>
    </div>
    
    
  );
}

export default App;
