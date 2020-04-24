import React from 'react';
import Card from '../Card/Card';
import kikkfestival from '../../assest/Image/img1.jpg';
import Card1 from '../Card1/Card1';
import './KikkPro.css';
import Textstyle from '../../Textstyle/Textstyle';
const KikkPro = (props) => {
    return(
        
        <div className="Card-festival">
           <Card >
               <img src={kikkfestival} alt="kikfestival"/>
         
           <div className="div-right">
               <h1 className="heading-style">KIKK . Pro</h1>
               <h5 className="style1" >NOV 02-04 . PLACE D'ARMES</h5>
               <p className="style2">The village is the best way to network and make</p>
              <p className="style3">  new business connections at the KIKK festival</p>
           </div>
           <Textstyle />
           </Card>
           <Card1 />
        </div>
    )
}
export default KikkPro;