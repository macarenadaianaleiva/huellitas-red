import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { api } from "../../services/api";
import styles from "./style.module.css";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.nombre || !form.apellido || !form.correo || !form.password || !form.confirmPassword) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      setError("El correo electrónico no es válido");
      return false;
    }
    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      await api.register(form);
      setSuccess("Cuenta creada exitosamente 🎉");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Registro de para acceder a Huellitas Red.</h2>
        <p className={styles.subtitle}>Crea tu cuenta en segundos</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className="sr-only">Nombre</label>
          <input
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          <label className="sr-only">Apellido</label>
          <input
            placeholder="Apellido"
            value={form.apellido}
            onChange={(e) => setForm({ ...form, apellido: e.target.value })}
          />

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

          <label className="sr-only">Repetir contraseña</label>
          <input
            type="password"
            placeholder="Repetir contraseña"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />

          {error && <ErrorMessage message={error} />}
          {success && <p className={styles.success}>{success}</p>}

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? <Loader /> : "Crear cuenta"}
          </button>
        </form>
      </div>
    </div>
  );
}
