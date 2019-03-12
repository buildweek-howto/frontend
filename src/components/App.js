import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import theme from '../theme';
import AppBar from './AppBar';
import TodoCard from './TodoCard';
import Grid from '@material-ui/core/Grid';


class App extends Component {
render() {
  return (
    <div className="app">
    <AppBar/>
    <h1>Make A Todo</h1>
    <div className="community">
    <div className="cardcontainer">
    <h1>Top Todos</h1>
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
    </div>
    )
}
}

export default App;