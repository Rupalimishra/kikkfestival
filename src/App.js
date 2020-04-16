import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Navigation from './Navigation/Navigation';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Video />
      </div>
      
    );
  }
}

export default App;
