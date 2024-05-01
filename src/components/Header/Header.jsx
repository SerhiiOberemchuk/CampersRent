import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ""}`
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ""}`
          }
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
