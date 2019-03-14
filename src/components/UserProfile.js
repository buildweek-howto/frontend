import React, { Component } from 'react';
import AppBar from './AppBar';
import { Paper, Avatar } from '@material-ui/core';
import PreviewCard from './PreviewCard';


class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
        <h2>Avi</h2>
      <Avatar/>
      <h2>Users How-Tos</h2>
      <Paper>
      <PreviewCard/>
      <PreviewCard/>
      </Paper>
      </div>
      )
  }
  }
  
  export default NewPost;