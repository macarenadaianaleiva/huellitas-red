import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f3f3f3" }}>
      <Link to="/">Inicio</Link> |{" "}
      {token ? (
        <>
          <Link to="/reservar">Reservar</Link> |{" "}
          <button onClick={handleLogout}>Salir</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/register">Registro</Link>
        </>
      )}
    </nav>
  );
}
