import React, { Component } from 'react';
import AppBar from './AppBar';
import HowToCard from './HowToCard';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import '../styles.css';

class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
      <div className="body">
      <div className="cards">
      <Paper container justify = "center">
       <Grid container spacing={16} justify = "center">
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
         <Grid item><HowToCard/></Grid>
       </Grid>
      </Paper>
      </div>
      {/* Search returned corpus */}
      </div>
      </div>
      )
  }
  }
  
export default NewPost;