import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ CSS import

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/create" className="nav-link">Create Note</Link>
    </nav>
  );
}

export default Navbar;
