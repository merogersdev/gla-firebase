import React from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import { FaShoppingBag } from "react-icons/fa";

// Context
import { useFirebaseAuthContext } from "../../context/AuthContext";

// Styles
import "./Header.scss";

const Header = ({ title }) => {
  const { user, logOut } = useFirebaseAuthContext();
  const name = user && user.displayName.split(" ")[0];

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <FaShoppingBag className="header__icon" />
          <span className="header__title">{title}</span>
        </Link>
        {user !== null ? (
          <div className="header__user">
            <div className="header__greeting">Hi, {name}</div>
            <button className="header__button" onClick={() => logOut()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="header__user">
            <NavLink className="header__link" to="/">
              Login
            </NavLink>
            <NavLink className="header__link" to="/signup">
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
