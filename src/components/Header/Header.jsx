import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Container from "../Common/Container/Container";
import { IoHomeOutline } from "react-icons/io5";
import { GrCatalogOption } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
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
            <IoHomeOutline />
            <span className={css.linkName}>Home</span>
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            <GrCatalogOption />
            <span className={css.linkName}>Catalog</span>
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            <MdFavoriteBorder />
            <span className={css.linkName}>Favorites</span>
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
