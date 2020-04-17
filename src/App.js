import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Video /> 
      </div>
      
    );
  }
}

export default App;
