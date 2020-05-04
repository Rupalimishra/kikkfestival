import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
import KikkPro from './Component/KikkPro/KikkPro';
import Image1 from './Image1/Image1';
import MainCard from './Component/Main-Card/MainCard';
// import Login from './Component/Card2/MainCard1/Login/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Video /> 
        <Image1 /> 
        <MainCard />
         <KikkPro />
         {/* <Login /> */}
      </div>
      
    );
  }
}

export default App;
