import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts, fetchCategories } from '../actions';
import PrivateRoute from './PrivateRoute';
import AppBar from './AppBar';
import NewPost from './NewPost';
import HowToCard from './HowToCard';
import { getFilteredPosts } from '../reducers';

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

// category & user IDs can be added to the second argument of getFilteredPosts as well
// these should probably be handled via routes:
// category/:id
// user/:id
const mapStateToProps = ({ posts, searchInput }) => ({
  posts: getFilteredPosts(posts, { searchInput })
});

export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts, fetchCategories }
)(Dashboard);
