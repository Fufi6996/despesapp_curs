import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inici</Link></li>
        <li><Link to="/login">Iniciar Sessió</Link></li>
        <li><Link to="/register">Registrar-se</Link></li>
      </ul>
    </nav>
  );
}