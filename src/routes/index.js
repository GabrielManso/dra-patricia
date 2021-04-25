import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Contacts from '../pages/contacts/Contacts';
import Main from '../pages/main/Main';
import Portfolio from '../pages/portfolio/Portfolio';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
        <Route path="/contato" exact component={Contacts} />
        <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  );
}