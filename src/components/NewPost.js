import React, { Component } from 'react';
import AppBar from './AppBar';
import Editor from './Editor';

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
