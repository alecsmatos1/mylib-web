import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import AddBook from '../pages/AddBook';
// import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/addbook" component={AddBook} />
  </Switch>
);

export default Routes;
