import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage";
import styles from "./style.module.css";

export default function Login() {
  const [form, setForm] = useState({ correo: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.correo || !form.password) {
      setError("Debes completar todos los campos");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      setError("Correo electrónico no válido");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await api.login(form);
      localStorage.setItem("token", data.token);
      navigate("/reservar");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>¡Bienvenido a Huellitas Red!</h1>
        <h2 className={styles.subtitle}>Inicia sesión en tu cuenta</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className="sr-only">Correo electrónico</label>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={(e) => setForm({ ...form, correo: e.target.value })}
          />

          <label className="sr-only">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {error && <ErrorMessage message={error} />}

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? <Loader /> : "Iniciar Sesión"}
          </button>
        </form>

        <div className={styles.links}>
          <Link to="#" className={styles.linkMuted}>
            ¿Olvidaste tu contraseña?
          </Link>
          <Link to="/register" className={styles.linkHighlight}>
            Registrate ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
