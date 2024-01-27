"use client"
import stilo from "./proyect.module.css";
function Proyect(){
    return(
        <div className={stilo.todo}>
            <div className={stilo.contenedor}>
                <img className={stilo.image} src="Hero_2.png"/>
                <div className={stilo.contenedorfalso}></div>
                
            </div>
            <div className={stilo.contenedor}>
                <img className={stilo.image} src="bussiness_man.png"/>
                <div className={stilo.contenedorfalso}></div>
                
            </div>
            <div className={stilo.contenedor}>
                <img className={stilo.image} src="issima_page.png"/>
                <div className={stilo.contenedorfalso}></div>
                
            </div>
            <div className={stilo.contenedor}>
                <img className={stilo.image} src="kitchen.jpeg"/>
                <div className={stilo.contenedorfalso}></div>
                
            </div>
        </div>
    );

}
export default Proyect;