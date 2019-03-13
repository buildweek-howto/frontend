import React, { Component } from 'react';
import Editor from './Editor';
import AppBar from './AppBar';
import EditorButtons from './EditorButtons';

class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
      <Editor/>
      <EditorButtons/>
      {/* Search returned corpuse */}
      </div>
      )
  }
  }
  
  export default NewPost;