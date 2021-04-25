import React from 'react';

import { Route, Router, Switch } from 'react-router-dom';

import Contacts from './pages/contacts/Contacts';
import Main from './pages/main/Main';
import Portfolio from './pages/portfolio/Portfolio';

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contato" exact component={Contacts} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
  </Router>    
  );

export default Routes;