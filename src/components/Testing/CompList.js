import React, { Component } from 'react';
import AppBar from '../AppBar'
import Avatar from '../UserProfile/Avatar'
import Editor from '../Editor'
import NewPost from '../NewPost'
import PreviewCard from '../PreviewCard'
import SearchContainer from '../SearchContainer'
import UserProfile from '../UserProfile/UserProfile'
import ViewHowTo from '../ViewHowTo';

class CompList extends Component {
  render() {
    return (
      <div className="app">
          <h1>AppBar</h1>
            <AppBar />
          <h1>/AppBar</h1>
          <br></br>
          <h1>Avatar</h1>
            <Avatar />
          <h1>/Avatar</h1>
          <br></br>
          <h1>Editor</h1>
            <Editor />
          <h1>/Editor</h1>
          <br></br>
          <h1>NewPost</h1>
            <NewPost />
          <h1>/NewPost</h1>
          <br></br>
          <h1>PreviewCard</h1>
            <PreviewCard />
          <h1>/PreviewCard</h1>
          <br></br>
          <h1>SearchContainer</h1>
            <SearchContainer />
          <h1>/SearchContainer</h1>
          <br></br>
          <h1>UserProfile</h1>
            <UserProfile />
          <h1>/UserProfile</h1>
          <br></br>
          <h1>ViewHowTo</h1>
            <ViewHowTo />
          <h1>/ViewHowTo</h1>
      </div>
    );
  }
}

export default CompList;
