import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from '../theme';
import PrivateRoute from './PrivateRoute';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Register from '../containers/Register';
import Dashboard from '../containers/Dashboard';
import NewPost from '../containers/NewPost';
// import UserProfile from './UserProfile';

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
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/dashboard/new" component={NewPost} />
          {/* <PrivateRoute path="/profile" component={UserProfile} />
          <Route component={NoMatch} /> */}
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;
