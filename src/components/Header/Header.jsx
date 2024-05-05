import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Container from "../Common/Container/Container";
const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.navigation}>
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
      </Container>
    </header>
  );
};

export default Header;
