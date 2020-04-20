import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
import KikkPro from './Component/KikkPro/KikkPro';
import Logo from './Logo/Logo';
class App extends Component {
  render() {
    return (
      <div>
        <Video /> 
        <Logo />
        <Header />
        <KikkPro />
       
      </div>
      
    );
  }
}

export default App;
