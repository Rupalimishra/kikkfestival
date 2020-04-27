import React from 'react';
import './Card4.css';
import kikkfestival from '../assest4/Image/img4.jpg';

const Card4 = (props) => {
    return(
        <div>
            <div className="divleft-style">
            <img className="img3" src={kikkfestival} alt="kikfestival"/>   

            </div>
            <div className="divright-style">
                <h2 className="main-cont-style">HELLO MONDAY</h2>
                <h5 className="Artist-heading">ARTIST.WRITER</h5>
                <p className="stylehead">The history of networked communication and digital
                   communication and digital technology is, for The</p>
            </div>
        </div>
    )
}
export default Card4;