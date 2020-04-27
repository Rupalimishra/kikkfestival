import React, { Component } from 'react';
import kikkfestival from '../assert/Image/img2.png';
import './Image1.css';
class Image1 extends Component {
    render(){
        return(
            <div>
                <div className="div-left">
                <img className="logo-style" src={kikkfestival} alt="kikfestival" />
                </div>
                <div className="text-sty">
               
                </div>
               
            </div>
        )
    }
}

export default Image1;