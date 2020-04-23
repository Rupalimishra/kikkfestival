import React from 'react';
import './Card2.css';
import kikkfestival from '../../assest2/Image/img5.jpg';                                                                                                                                                                
import Card3 from '../../Card3/Card3';
import Card4 from '../../Card4/Card4';
const Card2 = (props) => {
    return(
        <div className="main-div">
             <div className="left-div-style">
             <img src={kikkfestival} alt="kikfestival"/>                                                 
             </div>
             <div className="div-right-style">
                 <h5 className="Auth-style">SCIENCE FICTION AUTHOR</h5>
                 <div className="Bruce-style">
                 <p>Bruce sterling is an American</p>
                 <p>Science iction author, journalist</p>
                 <p>editor and critic best know for his...</p>

                 </div>
                
             </div>
             <Card3 />
             <Card4 />
        </div>
    )
}

export default Card2;