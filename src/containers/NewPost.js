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
    const { title, body, id } = this.state.post;
    const { addPost, editPost } = this.props;

    if (id) {
      editPost(id, { title, body });
    } else {
      addPost({ title, body });
    }

    this.setState({ post: initialPost });
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

const mapStateToProps = (state, { location }) => {
  if (!location.state) return { post: initialPost };
  const [title, body, id] = location.state;
  return { post: { title, body, id } };
}

export default connect(
  mapStateToProps,
  { addPost, editPost }
)(NewPost);
