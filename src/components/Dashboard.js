import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from './AppBar';
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