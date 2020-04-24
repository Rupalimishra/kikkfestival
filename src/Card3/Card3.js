import React from 'react';
import "./Crad3.css";
import kikkfestival from '../assest3/Image/img6.jpg';

 const Card3 =(props) => {
     return(
        <div>
        <div className="div-left-heading">
        <h2 className="main-style">INGRID BURRINGTION</h2>
         <h5 className="Aad-heading">ANDREAS ANDERSKOU</h5>
         <p className="styhead">people hearts and imagination
         towords the world we want so with</p>
        </div>
        <div className="div-right-image">
        <img src={kikkfestival} alt="kikfestival"/>   
        </div>
    </div>
     )
     
 }
 export default Card3;
