import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from '../theme';
import PrivateRoute from './PrivateRoute';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from './Dashboard';
import App from './App';
import Register from './Register';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route
            exact path="/"
            component={() => {
              window.location.href = 'https://how-to.now.sh/';
              return null;
            }}
          />
          <Route exact path="/(login|signup)" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <PrivateRoute path="/posts" component={Posts} />
          <Route component={NoMatch} /> */}
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;
