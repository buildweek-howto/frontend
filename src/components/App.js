import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import theme from '../theme';
import Paper from '@material-ui/core/Paper';
import AppBar from './AppBar';
import TodoCard from './TodoCard';
import Grid from '@material-ui/core/Grid';
import Editor from './Editor';

class App extends Component {
render() {
  return (
    <div className="app">
    <AppBar/>
    <h1>Make A How-To</h1>
    <div className="community">
    <div className="cardcontainer">
    <h1>Card</h1>
    <div className="editor">
    <Paper>
    <Editor/>
    </Paper>
    </div>
    <h4>How To</h4>
    <Grid container spacing={24}>
    <Grid item xs>
    <TodoCard/>
      </Grid>
    <Grid item xs>
    <TodoCard/>
      </Grid>
    <Grid item xs>
    <TodoCard/>
      </Grid>
    </Grid>
    </div>
    <h1>Community</h1>
    </div>
    <h1>How to</h1>
    <TodoCard/>
    <TodoCard/>
    <TodoCard/>
    </div>
    )
}
}

export default App;