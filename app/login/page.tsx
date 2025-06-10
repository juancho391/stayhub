import "./login.css";
import { FaHotel } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-icon">
          <FaHotel size={50} />
        </div>
        <h1>StayHub</h1>
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <input type="password" placeholder="Ingresa tu contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
        <p className="register-text">
          ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
