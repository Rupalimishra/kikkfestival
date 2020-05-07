import React, { Component } from 'react';
import './App.css';
import Video from './Video/Video'
import Header from './Component/Header/Header'
import KikkPro from './Component/KikkPro/KikkPro';
import Image1 from './Image1/Image1';
import MainCard from './Component/Main-Card/MainCard';
import MianHeader from './MianHeader/MianHeader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from './Form/Form';
import Ticket from './Ticket/Ticket';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <MianHeader />
        <Header />
        <Switch>
        <Route path="/ticket" component={Ticket} />
        <Route path="/form" component={Form} />
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
