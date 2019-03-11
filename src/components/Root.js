import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect exact from="/" to="landing-page" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
