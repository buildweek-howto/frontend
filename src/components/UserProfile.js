import React, { Component } from 'react';
import AppBar from './AppBar';
import { Paper, Avatar } from '@material-ui/core';


class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
      <Paper>
        <h1>Avi</h1>
      <Avatar/>
      </Paper>
      <h1>User How-Tos</h1>
      </div>
      )
  }
  }
  
  export default NewPost;