import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchPosts, fetchCategories, deletePost } from '../actions';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import HowToCard from '../components/HowToCard';
import { getFilteredPosts } from '../reducers';

const styles = {
  postsContainer: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.fetchCategories();
  }

  render() {
    const { classes, history, match, posts, users, deletePost } = this.props;

    return (
      <div>
        <header>
          <MenuBar history={history} />
        </header>
        <main>
          <section className={classes.postsContainer}>
            {posts.allPosts &&
              posts.allPosts.map(({ creator_id, ...rest }) => (
                <HowToCard
                  key={rest.id}
                  user={users[creator_id]}
                  delete={deletePost}
                  history={history}
                  match={match}
                  {...rest} />
              ))}
          </section>
        </main>
      </div>
    );
  }
}

// category & user IDs can be added to the second argument of getFilteredPosts as well
// these should probably be handled via routes:
// category/:id
// user/:id
const mapStateToProps = ({ posts, searchInput, users }) => ({
  posts: getFilteredPosts(posts, { searchInput }),
  users
});

export default connect(
  mapStateToProps,
  { fetchUsers, fetchPosts, fetchCategories, deletePost }
)(withStyles(styles)(Dashboard));
