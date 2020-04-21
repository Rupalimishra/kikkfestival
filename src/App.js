import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
import KikkPro from './Component/KikkPro/KikkPro';
import Image1 from './Image1/Image1';

class App extends Component {
  render() {
    return (
      <div>
        <Video /> 
        <Image1 />
        <Header />
        <KikkPro />
       
      </div>
      
    );
  }
}

export default App;
