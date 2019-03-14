import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from '../theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './Dashboard';
import Register from './Register';
import SearchContainer from './SearchContainer';
import ViewHowTo from './ViewHowTo';
import NewPost from './NewPost';
import CompList from './Testing/CompList';


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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/post/sample" component={ViewHowTo} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/testing/complist" component={CompList} />
          {/* <PrivateRoute path="/posts" component={Posts} />  */}
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;
