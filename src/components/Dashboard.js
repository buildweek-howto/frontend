import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts, fetchCategories } from '../actions';
import PrivateRoute from './PrivateRoute';
import AppBar from './AppBar';
import NewPost from './NewPost';
import HowToCard from './PreviewCard';
import { getFilteredPosts } from '../reducers';
import Paper from '@material-ui/core/Paper';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    const { history, match, posts } = this.props;

    return (
      <div className="app">
        <AppBar history={history} />
        <PrivateRoute path={`${match.path}/new`} component={NewPost} />
        <Paper>
        {posts.allPosts && posts.allPosts.map(post => (
          <HowToCard key={post.id} {...post} />
        ))}
        {posts.allPosts && posts.allPosts.map(post => (
          <HowToCard key={post.id} {...post} />
        ))}
        </Paper>
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
