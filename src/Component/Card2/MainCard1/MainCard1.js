
import React , {Component} from 'react';
import kikkfestival from '../../../assest5/Image/img8.jpeg';
import Tagfestival from '../../../assest6/img7.jpeg';

import './MainCard1.css';

class MainCard1 extends Component {
    render(){
        return(
            <div>
              <div className="left-sty-top">
                 <h2 className="headsty">TWITTER</h2>
                 <span className="mainpara">
                 Do you know @tastysuperhero ? The dutch studio
                 didn’t come to #KIKK19 to speak about pastry 
                 but well about how they… https://t.co/d8NmFjU8hk
                 </span>
                 <hr />
              </div>
              <div className="left-sty-bottom">
                <h2 className="headsty1">TWITTER</h2>
                <span className="mainpara1">
                  We go on with our highlights of #KIKK19, today
                  listen to @hyphen_labs speaking about
                  marginalisation, power structu…
                </span>
              </div>
              <div className="right-sty-div">
              <h1 className="right-head-sty">Get the latest info about KIKK</h1>
              <span className="rightsty">
              You wish to know everything about
               KIKK before everybody does and be 
               the center of attention, get our newsletter.
               <div>
                 <div className="left-bottom-tag">
                 <img  src={kikkfestival} alt="kikfestival"/>   
                 </div>
                 <div className="right-bottom-tag">
                 <img  className="imgsty" src={Tagfestival} alt="Tagfestival"/>   
                 </div>
               </div>
              </span>
              </div>
            </div>
        )
    }
}
export default MainCard1;