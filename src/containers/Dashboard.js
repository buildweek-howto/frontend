import React from 'react';
import { connect } from 'react-redux';
import { editPost, deletePost } from '../actions';
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

const Dashboard = ({ classes, history, match, posts, users, editPost, deletePost }) => (
  <div>
    <header>
      <MenuBar history={history} />
    </header>
    <main>
      <section className={classes.postsContainer}>
        {posts.allPosts &&
          posts.allPosts.map(post => (
            <HowToCard
              key={post.id}
              user={users[post.creator_id]}
              delete={deletePost}
              edit={editPost}
              history={history}
              match={match}
              post={post}
            />
          ))}
      </section>
    </main>
  </div>
);

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
  { editPost, deletePost }
)(withStyles(styles)(Dashboard));
