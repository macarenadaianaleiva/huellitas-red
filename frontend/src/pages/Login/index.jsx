import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage";

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
      setError("Correo inválido");
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
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
          {loading ? <Loader /> : "Ingresar"}
        </button>
      </form>
      <ErrorMessage message={error} />
    </div>
  );
}
