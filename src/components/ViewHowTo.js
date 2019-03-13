import React, { Component } from 'react';
import AppBar from './AppBar';
import { Paper } from '@material-ui/core';
import SocialButtons from './SocialButtons';


class NewPost extends Component {
  render() {
    return (
      <div className="app">
      <AppBar/>
      <Paper>
        <h1>Hello World!</h1>

        <h2> 1. Cras orci eros, faucibus vitae laoreet</h2>
        <p>Etiam mattis risus ut aliquam euismod. Curabitur sit amet magna sed leo pretium volutpat. 
          Pellentesque sem augue, ultrices nec nunc eu, aliquam tincidunt quam. 
          Vestibulum sit amet tincidunt ex. Cras id consequat lorem. Integer vehicula 
          finibus dui ac viverra. Vestibulum sollicitudin mi at laoreet cursus. Cras in 
          mauris id metus vulputate sollicitudin sed ac ante. Vivamus bibendum luctus ex, 
          a viverra erat bibendum non. Etiam porta ligula a posuere commodo. </p>
        <h2>2. Etiam ut viverra risus, vitae laoreet sem.</h2>
        <p> Etiam ut viverra risus, vitae laoreet sem.
           Vivamus quis velit id libero placerat sollicitudin sed sit amet ex. 
           Fusce sem turpis, mollis nec cursus a, scelerisque ac eros. Aenean neque lacus. </p>
      </Paper>
      {/* Search returned corpuse */}
      <SocialButtons/>
      </div>
      )
  }
  }
  
  export default NewPost;