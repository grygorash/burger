import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getCartSum } from '../../selectors';
import './Header.css';
import logo from '../../img/burger-loader.png';

const activeTab = (path, tab) => path === tab ? 'active' : '';

const Header = (props) =>
  <header className="header flex">
    <div className="header__logo">
      <Link to="/"
            className={activeTab(props.location.pathname, '/')}>
        <img src={logo} alt="" />
        Burgers
      </Link>
    </div>
    <nav className="header__navigation">
      <Link to="/menu"
            className={activeTab(props.location.pathname, '/menu')}>
        Меню
      </Link>
      <Link to="/constructor"
            className={activeTab(props.location.pathname, '/constructor')}>
        Конструктор
      </Link>
      <Link to="/contacts"
            className={activeTab(props.location.pathname, '/contacts')}>
        Контакты
      </Link>
      <Link to="/cart"
            className={activeTab(props.location.pathname, '/cart')}>
        Заказ: {props.cartSum} UAH
      </Link>
    </nav>
  </header>;

const mapStateToProps = state => ({
  cartSum: getCartSum(state),
});

export default withRouter(connect(mapStateToProps, null)(Header));