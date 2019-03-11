import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import PrivateRoute from './PrivateRoute';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <GlobalStyles />
        <Switch>
          <Redirect exact from="/" to="landing-page" />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/onboard" component={Dashboard} />
          <PrivateRoute path="/posts" component={Posts} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragmen>
    </Router>
  </Provider>
);

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.8rem;
    font-family: 'Lato', sans-serif;
  }
`;

export default Root;
