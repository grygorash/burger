import React from 'react';
import { Container, Row } from 'reactstrap';
import { Route, Switch } from 'react-router';

import Header from '../Header/Header';
import BurgerList from '../BurgerList/BurgerList';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const App = () =>
  <Container className="app" fluid>
    <Row>
      <Header />
      <Switch>
        <Route
          exact path="/"
          component={BurgerList}
        />
        <Route
          path="/constructor"
          component={BurgerConstructor}
        />
      </Switch>
    </Row>
  </Container>;

export default App;
