"use client"

import style from "./perfil.module.css"
function Perfil(){
    return(
        <div className={style["profile"]}>
                <figure className={style["profile-img"]}>
                    <img src="perfilB.jpeg"/>
                </figure>
                <div className={style["profile-info"]}>
                    <h1>Joel Bemjamin </h1>
                    <h1>Cruz Chacon</h1>
                    <p>junior developer</p>
                    <div className={style["profile-social"]}>
                        <a href="https://github.com/Alejandrocruz202" target="_blank">
                            <img src="./github.svg" className={style["icon"]}/>
                        </a> 
                        <a href="https://www.facebook.com/profile.php?id=61555775708942" target="_blank">
                            <img src="./linkedin.svg" className={style["icon"]}/>
                        </a> 
                        <a href="https://www.youtube.com/channel/UCaEXxTyIai1EMU8x_4rBj6Q" target="_blank">
                            <img src="./youtube.svg" className={style["icon"]}/>
                        </a> 
                        <a href="https://twitter.com/AngelskiandHell" target="_blank">
                            <img src="./twitter.svg" className={style["icon"]}/>
                        </a> 
                    </div>
                </div>
            </div>
    );
    
}
export default Perfil;