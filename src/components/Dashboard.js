import React, { Component } from 'react';
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
