import React, { Component } from 'react';
import kikkfestival from '../assert/Image/kikk.png';
import './Logo.css';
class Logo extends Component {
    render(){
        return(
            <div>
                <div className="div-left">
                <img src={kikkfestival} alt="kikfestival" style={{height:"57px" , padding:"56px", position:"relative", bottom:"3px" }}  />
                </div>
               
            </div>
        )
    }
}

export default Logo;