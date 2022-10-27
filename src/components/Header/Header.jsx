import React from "react";
import PropTypes from "prop-types";

// Components
import Container from "../Container/Container";

import "./Header.scss";

const Header = ({ title }) => {
  return (
    <header className="header">
      <Container>
        <a className="header__logo" href="/">
          {title}
        </a>
      </Container>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Grocery List",
};

export default Header;
