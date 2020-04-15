import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Navigation from './Navigation/Navigation';
import Logo from './logo/logo';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Video />
        <Logo />
      </div>
      
    );
  }
}

export default App;
