import styles from "./style.module.css";
import guarderiaIcon from "../../assets/guarderia.png"
import paseoIcon from "../../assets/paseo.png"
import cuidadoIcon from "../../assets/cuidado.png"
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    <div className={styles.home}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          Huellitas Red: El Cuidado Integral para tu Mascota
        </h1>
        <p className={styles.subtitle}>
          Ya sea un paseo, una sesión de higiene o un día de guardería, podés
          gestionar todos los servicios para tu mascota haciendo clic en el
          botón <span className={styles.highlight}>“Reservar Turno”</span>.
        </p>
      </header>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.card}>
          <img src={guarderiaIcon} alt="Guardería Canina" />
          <h3>GUARDERÍA CANINA</h3>
        </div>
        <div className={styles.card}>
          <img src={paseoIcon} alt="Paseo Canino" />
          <h3>PASEO CANINO</h3>
        </div>
        <div className={styles.card}>
          <img src={cuidadoIcon} alt="Cuidado e Higiene" />
          <h3>CUIDADO E HIGIENE CANINO</h3>
        </div>
      </section>

      {/* Call To Action */}
      <div className={styles.cta}>
        <button className={styles.button}>Reservar Turno</button>
      </div>

      {/* Footer */}
     <footer className={styles.footer}>
        <p>Conectate con nosotros</p>
        <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
                <FaFacebook className={styles.icon} />
            </a>
            <a href="#" aria-label="Instagram">
                <FaInstagram className={styles.icon} />
            </a>
        </div>
    </footer>

    </div>
  );
}
