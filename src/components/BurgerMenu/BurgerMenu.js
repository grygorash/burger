import React from 'react';

import MenuHeader from './MenuHeader/MenuHeader';
import MenuList from './MenuList/MenuList';
import './BurgerMenu.css';

const BurgerMenu = () =>
  <div className="menu-content">
    <MenuHeader />
    <MenuList />
  </div>;

export default BurgerMenu;