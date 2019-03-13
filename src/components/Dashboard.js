import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from './AppBar';
import TodoCard from './TodoCard';
import Grid from '@material-ui/core/Grid';
import Editor from './Editor';
import { fetchUsers, fetchPosts, fetchCategories } from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="app">
        <AppBar history={this.props.history} />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUsers, fetchPosts, fetchCategories }
)(Dashboard);
=======
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import theme from '../theme';
import AppBar from './AppBar';
import PreviewCard from './PreviewCard';


class Dashboard extends Component {
render() {
  return (
    <div className="app">
    <AppBar/>
    <PreviewCard/>
    </div>
    )
}
}

export default Dashboard;
>>>>>>> 10c4aac4ceef6ee7076e9f9d1daf97e64629717a
