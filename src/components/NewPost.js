import React, { Component } from 'react';
import Editor from './Editor';
import AppBar from './AppBar';
import EditorButtons from './EditorButtons';

class NewPost extends Component {
  render() {
    return (
      <React.Fragment>
        <Editor />
        <EditorButtons />
        {/* Search returned corpuse */}
      </React.Fragment>
    );
  }
}

export default NewPost;
