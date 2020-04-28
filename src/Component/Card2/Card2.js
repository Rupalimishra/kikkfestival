import React from 'react';
import './Card2.css';
import kikkfestival from '../../assest2/Image/img5.jpg';                                                                                                                                                                
import Card3 from '../../Card3/Card3';
import Card4 from '../../Card4/Card4';
import Footer from '../../Footer/Footer';
import MainCard1 from './MainCard1/MainCard1';
const Card2 = (props) => {
    return(
        <div className="main-div">
             <div className="left-div-style">
             <img className="img" src={kikkfestival} alt="kikfestival"/>                                                 
             </div>
             <div className="div-right-style">
                 <h2 className="main-sub-heading">BRUCE STERLING</h2>
                 <h5 className="Auth-style">SCIENCE FICTION AUTHOR</h5>
                 <div className="Bruce-style">
                 <p className="main-sty">Bruce sterling is an American
                                        Science friction author,journalist
                                        </p>

                 </div>
                
             </div>
             <Card3 />
             <Card4 />
             <MainCard1 />
             <Footer />
        </div>
    )
}

export default Card2;