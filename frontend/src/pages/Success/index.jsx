import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>🎉 Reserva creada con éxito</h2>
      <p>Tu turno fue registrado correctamente.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
