import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage";

export default function Register() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.nombre || !form.apellido || !form.correo || !form.password) {
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
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      await api.register(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          placeholder="Apellido"
          onChange={(e) => setForm({ ...form, apellido: e.target.value })}
        />
        <input
          placeholder="Correo"
          onChange={(e) => setForm({ ...form, correo: e.target.value })}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Crear cuenta"}
        </button>
      </form>

      <ErrorMessage message={error} />
    </div>
  );
}
