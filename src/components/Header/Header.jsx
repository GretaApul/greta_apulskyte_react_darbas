import { NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './Header.module.css';

function Header() {
  // useContext ir pagal isLoggedin rodom arba nerodom
  const { isUserLoggedIn, logout } = useAuthCtx();

  return (
    <header className={css.header}>
      <nav>
        <img src="logo2.jpeg" alt="" />
        {isUserLoggedIn && (
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
        )}
        {isUserLoggedIn && (
          <NavLink className="nav-link" to="/add">
            Add
          </NavLink>
        )}

        {!isUserLoggedIn && (
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        )}

        {/*  */}
        {!isUserLoggedIn && (
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}

        {isUserLoggedIn && (
          <NavLink onClick={logout} className="nav-link" to="/login">
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
