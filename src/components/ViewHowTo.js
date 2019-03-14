import React from 'react';
import AppBar from './AppBar';
import { Paper, Avatar } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

const ViewHowTo = props => {
  return (
      <div className="app">
      <AppBar/>
      <h1>{props.title}</h1>
      <Avatar onClick={() => { console.log(`User ${props.creator_id}`) }}/> {/* Link to user profile */}
      <Paper>
        {props.body}
      </Paper>
      <Fab color="primary" aria-label="Header" onClick={() => { console.log(`Heart ${props.id}`) }}> {/* idk */}
        <FavoriteIcon />
      </Fab>
      <Fab color="primary" aria-label="Share" onClick={() => { console.log(`Share ${props.id}`) }}> {/* return address*/}
        <ShareIcon />  
      </Fab>
      <Fab variant="extended" aria-label="Comment" onClick={() => { console.log(`Add comment? ${props.id}`) }}> {/* send delete, change to delete?s */}
        <CommentIcon />
        Comment
      </Fab>
      </div>
      )
  }
  
  ViewHowTo.defaultProps = {
    id:	null,
    title: 'Sample',
    created_at: 'createdAt',
    body:	'sampleBody',
    likes: 100,
    updated_at: 'updatedAt',
    creator_id: 'creatorID',
  };

  export default ViewHowTo;