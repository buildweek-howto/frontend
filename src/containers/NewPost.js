import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import EditorButtons from '../components/EditorButtons';
import 'react-quill/dist/quill.snow.css';
import { addPost, editPost } from '../actions';

const initialPost = { title: '', body: '', id: null };

class NewPost extends Component {
  state = { post: this.props.post };

  handleTitle = ({ target: { value } }) => {
    this.setState(({ post }) => ({ post: { ...post, title: value } }));
  };

  handleBody = value => {
    this.setState(({ post }) => ({ post: { ...post, body: value } }));
  };

  handleSubmit = () => {
    const { id } = this.state.post;
    const { addPost, editPost, currentUser, history } = this.props;

    const creator_id = currentUser.id;
    const postData = id ? this.state.post : { ...this.state.post, creator_id };

    (Boolean(id) ? editPost(id, postData) : addPost(postData)).then(() => {
      history.push('/dashboard');
    });
  };

  render() {
    const { title, body } = this.state.post;
    const { history } = this.props;

    return (
      <React.Fragment>
        <input type="text" placeholder="Title" value={title} onChange={this.handleTitle} />
        <ReactQuill value={body} onChange={this.handleBody} />
        <EditorButtons handleSubmit={this.handleSubmit} history={history} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (
  { currentUser },
  { location: { state } }
) => ({
  post: state ? state[0] : initialPost,
  currentUser
});

export default connect(
  mapStateToProps,
  { addPost, editPost }
)(NewPost);
