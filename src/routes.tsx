import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
