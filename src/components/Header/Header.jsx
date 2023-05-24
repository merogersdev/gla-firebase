import React from 'react';

//Icons
import { SiFirebase } from 'react-icons/si';

// Styles
import './Header.scss';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <a className='header__logo' href='/'>
          <SiFirebase className='header__icon' />
          {title}
        </a>
      </div>
    </header>
  );
};

export default Header;
