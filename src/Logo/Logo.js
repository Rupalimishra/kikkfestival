import React, { Component } from 'react';
import kikkfestival from '../assert/Image/kikk.png';
import './Logo.css';
class Logo extends Component {
    render(){
        return(
            <div className="menu_logo ">
                <img src={kikkfestival} alt="kikfestival"/>
            </div>
        )
    }
}

export default Logo;