import React, { Component } from 'react';
import AppBar from './AppBar';
import HowToCard from './HowToCard';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
      <Paper>
       <Grid container spacing={16}>
        <Grid item>
         <HowToCard/>
        </Grid>
       </Grid>
      </Paper>
      <Paper>
       <Grid container spacing={16}>
        <Grid item>
         <HowToCard/>
        </Grid>
       </Grid>
      </Paper>
      <Paper>
       <Grid container spacing={16}>
        <Grid item>
         <HowToCard/>
        </Grid>
       </Grid>
      </Paper>
      <h1>Imagine you typed search</h1>
      {/* Search returned corpuse */}
      </div>
      )
  }
  }
  
export default NewPost;