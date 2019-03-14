import React, { Component } from 'react';
import Editor from './Editor';
import AppBar from './AppBar';

class NewPost extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar/>
        <Editor/>
      </React.Fragment>
    );
  }
}

export default NewPost;
