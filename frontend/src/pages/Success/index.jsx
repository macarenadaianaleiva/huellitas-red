import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";

export default function Success() {
  const location = useLocation();
  const state = location.state || {}; 
  const { type = "registro" } = state;

  const isRegistro = type === "registro";

  return (
    <div className={styles.successContainer}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {isRegistro ? "Registro exitoso" : "Reserva creada con éxito"}
        </h2>

        <div className={styles.iconContainer}>
          <span className={styles.check}>✓</span>
        </div>

        <p className={styles.message}>
          {isRegistro
            ? "Cuenta creada exitosamente"
            : "Tu turno fue registrado correctamente"}
        </p>

        <p className={styles.submessage}>
          Hacé clic en el botón para volver al inicio
        </p>

        <Link to="/" className={styles.button}>
          IR HOME
        </Link>
      </div>
    </div>
  );
}
