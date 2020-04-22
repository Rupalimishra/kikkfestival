import React from 'react';
import './Card2.css';
import kikkfestival from '../../assest2/Image/img5.jpg';

const Card2 = (props) => {
    return(
        <div>
             <div className="left-div">
             <img src={kikkfestival} alt="kikfestival"/>
             </div>
             <div className="div-right">
                 <h1>ARTIST.WRITER</h1>
                 <p>
                     The history of networked comminaction and digital
                     technology is , for the most part
                 </p>

             </div>
        </div>
    )
}

export default Card2;