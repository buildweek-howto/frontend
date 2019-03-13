import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts, fetchCategories } from '../actions';
import PrivateRoute from './PrivateRoute';
import AppBar from './AppBar';
import NewPost from './NewPost';
import HowToCard from './HowToCard';

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
        <PrivateRoute path={`${this.props.match.path}/new`} component={NewPost} />
        <HowToCard />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUsers, fetchPosts, fetchCategories }
)(Dashboard);
