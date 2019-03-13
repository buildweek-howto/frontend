import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from '../theme';
import PrivateRoute from './PrivateRoute';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from './Dashboard';
import NewPost from './NewPost';
import Login from './Login';
import Signup from './Signup';
import SearchContainer from './SearchContainer';
import ViewHowTo from './ViewHowTo';
import UserProfile from './UserProfile';



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

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/post/sample" component={ViewHowTo} />
          <Route path="/profile" component={UserProfile} />
          {/* <PrivateRoute path="/onboard" component={Dashboard} />
          <PrivateRoute path="/posts" component={Posts} />
          <Route component={NoMatch} /> */}
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;