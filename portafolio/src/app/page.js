import Image from "next/image";
import styles from "./page.module.css";
import Perfil from "./components/perfil";
import Datos from "./components/datos";
import Proyect from "./components/proyect";
export default function Home() {
  return (
    <main className={styles.main}>
        <Perfil/>
        <Datos/>
        <Proyect/>
    </main>
  );
}
