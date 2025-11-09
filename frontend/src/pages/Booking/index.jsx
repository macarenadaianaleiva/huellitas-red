import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { api } from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage";

export default function Booking() {
  const [form, setForm] = useState({
    tipoServicio: "",
    fechaInicio: "",
    horaInicio: "",
    cantidadMascotas: 1,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!form.tipoServicio) return setError("Seleccioná un tipo de servicio");
    if (!form.fechaInicio) return setError("Debés elegir una fecha");
    if (!form.horaInicio) return setError("Debés elegir una hora");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      await api.reservar(form);
      navigate("/success");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Reservar Turno</h2>
      <form onSubmit={handleSubmit}>
        <select
          onChange={(e) =>
            setForm({ ...form, tipoServicio: e.target.value })
          }
        >
          <option value="">Seleccioná un servicio</option>
          <option value="guarderia">Guardería</option>
          <option value="paseo">Paseo</option>
          <option value="cuidado">Cuidado e Higiene</option>
        </select>
        <input
          type="date"
          onChange={(e) => setForm({ ...form, fechaInicio: e.target.value })}
        />
        <input
          type="time"
          onChange={(e) => setForm({ ...form, horaInicio: e.target.value })}
        />
        <input
          type="number"
          min="1"
          onChange={(e) =>
            setForm({ ...form, cantidadMascotas: e.target.value })
          }
        />
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Confirmar"}
        </button>
      </form>

      <ErrorMessage message={error} />
    </div>
  );
}
