"use client"

import style from "./perfil.module.css"
function Perfil(){
    return(
        <div className={style.profile}>
                <figure className={style.profileimg}>
                    <img src="perfil.jpeg"/>
                </figure>
                <div className={style.profileinfo}>
                    <h1>Victor Alvarado</h1>
                    <p>Software Engineer</p>
                    <div className={style.profilesocial}>
                        <a href="https://github.com" target="_blank">
                            <img src="./github.svg" className={style.icon}/>
                        </a> 
                        <a href="https://github.com" target="_blank">
                            <img src="./linkedin.svg" className={style.icon}/>
                        </a> 
                        <a href="https://github.com" target="_blank">
                            <img src="./youtube.svg" className={style.icon}/>
                        </a> 
                        <a href="https://github.com" target="_blank">
                            <img src="./twitter.svg" className={style.icon}/>
                        </a> 
                    </div>
                </div>
            </div>
    );
    
}
export default Perfil;