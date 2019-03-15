import React, { useEffect } from 'react';
import { fetchUsers, fetchPosts, fetchCategories } from '../actions';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PrivateRoute from './PrivateRoute';
import Register from '../containers/Register';
import Dashboard from '../containers/Dashboard';
import NewPost from '../containers/NewPost';
import theme from '../theme';

const Root = ({ store }) => {
  useEffect(() => {
    store.dispatch(fetchUsers());
    store.dispatch(fetchPosts());
    store.dispatch(fetchCategories());
  });

  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                window.location.href = 'https://how-to.now.sh/';
                return null;
              }}
            />
            <Route exact path="/(login|signup)" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/dashboard/new" component={NewPost} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
