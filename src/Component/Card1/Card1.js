import React from 'react';
import './Card1.css';
import kikkfestival from '../../assert1/Image/img3.jpg';
const Card1 = (props) => {
    return(
        <div>
            <div  className="div-left">
                <h1 className="heading-style">KIKK.Design</h1>
                <h5 className="heading-style1">NOV 02-03 TH, PALAIS DES CONGRES</h5>
                <p className="style_para">The round of KIKK.Design lectures will features
                                           Design who will presents on overview of</p>
                

            </div>
            <div className="div-right">
            <img className="img1" src={kikkfestival} alt="kikfestival"/>
            </div>
        </div>
    )
}
export default Card1;