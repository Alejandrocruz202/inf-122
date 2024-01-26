"use client"
import styles from "./datos.module.css"
function Datos(){
    return(
        <div className={styles["main"]}>
            <div className={styles["facts"]}>
                <div className={styles["fact-item"]}>
                    <h2>7</h2>
                    <p>Years of work experience</p>
                </div>
                <div className={styles["fact-item"]}>
                    <h2>50+</h2>
                    <p>Completed projects</p>
                </div>
                <div className={styles["fact-item"]}>
                    <h2>20+</h2>
                    <p>Satisfied customers</p>
                </div>
            </div>
            <div className={styles["buttons"]}>
                <button className={styles["btn-primary"]} onclick="download()">
                    <div className={styles["btn-content"]}>
                        <p>Download CV</p>
                        <img src="download.svg" alt="arrow" className={styles["btn-primary-img"]}/>
                    </div>
                </button>
                <a className={styles["btn-secondary"]} href="mailto:contact@me.com">
                    <div className={styles["btn-content"]}>
                        <p>Contact me</p>
                    </div>
                </a>
            </div>
            <div className={styles["tabs"]}>
                <button className={styles["tabs-background-item-active"]}>
                    <p className={styles["tabs-background-item-text"]}>Portfolio</p>
                </button>
                <button className={styles["tabs-background-item"]}>
                    <p className={styles["tabs-background-item-text"]}>Skills</p>
                </button>

            </div>
        </div>
    );
}
export default Datos;