"use client"
import style from "./proyect.module.css";
function Proyect(){
    return(
        <div classname={style["project-container"]}>
                <div classname={style["content-card-img"]}>
                    <img classname={style["image"]} src="assets/images/Hero_2.png" />
                    <div classname={style["content-card-img-overlay"]}></div>
                    <div classname={style["content-card-img-detail"]}>
                        <p classname={style["title"]}>SmarterTrading411</p>
                        <p classname={style["detail"]}>Landing page of SmarterTrading411 created using WordPress</p>
                        <button classname={style["btn"]}>
                            <img src="assets/icons/link.svg" alt="link"/>
                        </button>
                    </div>
                </div>
                <div classname={style["content-card-img"]}>
                    <img classname={style["image"]} src="bussiness_man.png" height={100} width={100} />
                    <div classname={style["content-card-img-overlay"]}></div>
                </div>
                
                <div classname={style["content-card-img"]}>
                    <img classname={style["image"]} src="./kitchen.jpeg" height={100} width={100} />
                    <div classname={style["content-card-img-overlay"]}></div>
                </div>
                <div classname={style["content-card-img"]}>
                    <img classname={style["image"]} src="Hero_2.png" height={100} width={100} />
                    <div classname={style["content-card-img-overlay"]}></div>
                </div>
                <div classname={style["content-card-img"]}>
                    <img classname={style["image grayscale"]} src="issima_page.png" height={100} width={100} />
                    <div classname={style["content-card-img-overlay"]}></div>
                </div>
            </div>
        
    );

}
export default Proyect;