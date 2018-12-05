import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lifecycle from 'react-pure-lifecycle';

import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import BurgerCarousel from '../BurgerCarousel/BurgerCarousel';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerCart from '../BurgerCart/BurgerCart';
import { fetchInitialState } from '../../actions';
import BurgerContacts from '../BurgerContacts/BurgerContacts';

const methods = {
  componentDidMount(props) {
    props.fetchInitialState();
  },
  componentDidUpdate(props) {
    localStorage.setItem('cart', JSON.stringify(props.cart));
  }
};

const App = (props) =>
  <Fragment>
    <Header />
    <Switch>
      <Route
        exact path="/"
        component={BurgerCarousel}
      />
      <Route
        path="/menu"
        component={BurgerMenu}
      />
      <Route
        path="/constructor"
        component={BurgerConstructor}
      />
      <Route
        path="/contacts"
        component={BurgerContacts}
      />
      <Route
        path="/cart"
        component={BurgerCart}
      />
    </Switch>
    <Feedback />
    <Modal type={props.modals.cart ? 'cart' : props.modals.feedback ? 'feedback' : ''} />
    <Loader />
  </Fragment>;


const mapStateToProps = state => ({
  burgers: state.burgers,
  cart: state.cart,
  modals: state.modals
});

const mapDispatchToProps = dispatch => ({
  fetchInitialState: bindActionCreators(fetchInitialState, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(lifecycle(methods)(App)));
