import React from 'react';
import './MainCard.css';
import Card2 from '../Card2/Card2';
const MainCard =(props) => {
    return(
        <div className="Main-style">
             <div className="section-backround-text">
                 The Program

             </div>
              <h1 className="card-style">Discover the Creative</h1>
              <h1>minds of the lineup</h1>
              <div className="div-left">
               <p className="main-head-sty">
                We’ve added some dishes on the menu this year
                with more conferences: KIKK.Talk, KIKK.Design,
                KIKK.Tech and KIKK.French as well as an exhibition that will
                extend beyond the gallery’s walls with outdoor installations in the city and a 
               </p>
              </div>
              <div>
                  <h2 className="maincard-sty">see full Program</h2>

              </div>
              <Card2 />
        </div>
    )
}
export default MainCard;