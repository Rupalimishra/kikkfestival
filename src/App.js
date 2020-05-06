import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
import KikkPro from './Component/KikkPro/KikkPro';
import Image1 from './Image1/Image1';
import MainCard from './Component/Main-Card/MainCard';
import MianHeader from './MianHeader/MianHeader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Form from './Form/Form';
import GetTickets from './GetTickets/GetTickets';
// import Login from './Component/Card2/MainCard1/Login/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <MianHeader />
        <Header />
        <Switch>
        {/* <Route path="/form" component={Form} /> */}
        <Route  path="/gettickets"  component={GetTickets}/>
        </Switch>
        <Video /> 
        <Image1 /> 
        <MainCard />
         <KikkPro />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
