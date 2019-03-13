import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import theme from '../theme';
import AppBar from './AppBar';
import PreviewCard from './PreviewCard';


class Dashboard extends Component {
render() {
  return (
    <div className="app">
    <AppBar/>
    <PreviewCard/>
    </div>
    )
}
}

export default Dashboard;