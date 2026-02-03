import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
        Products
      </NavLink>
    </nav>
  );
}
