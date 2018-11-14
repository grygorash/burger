import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../img/burger-loader.png';

const Header = () =>

  <header className="col-12 header flex">
    <div className="header__logo flex">
      <img src={logo} alt="" />
      <span>Burgers</span>
    </div>
    <nav className="header__navigation">
      <Link to="/constructor">
        Конструктор
      </Link>
    </nav>
  </header>;

export default Header;