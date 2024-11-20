import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'activeLink link' : 'nonactiveLink link'
          }
        >
          Domů
        </NavLink>
        <br />
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'activeLink link' : 'nonactiveLink link'
          }
        >
          O nás
        </NavLink>
        <br />
        <NavLink
          to="center"
          className={({ isActive }) =>
            isActive ? 'activeLink link' : 'nonactiveLink link'
          }
        >
          Pobočky
        </NavLink>
        <br />
        <NavLink
          to="priceList"
          className={({ isActive }) =>
            isActive ? 'activeLink link' : 'nonactiveLink link'
          }
        >
          Ceník
        </NavLink>
        <br />
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'activeLink link' : 'nonactiveLink link'
          }
        >
          Kontakt
        </NavLink>
        <br />

        <br />
      </nav>
    </header>
  );
};

export default Navbar;
