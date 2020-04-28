
import React , {Component} from 'react';
import './MainCard1.css';

class MainCard1 extends Component {
    render(){
        return(
            <div>
              <div className="left-sty-top">
                 <h2 className="headsty">TWITTER</h2>
                 <span className="mainpara">
                 We go on with our highlights of #KIKK19, t
                 oday listen to @hyphen_labs speaking about
                  marginalisation, power structu… https://t.co/ZkoXpT5QEg
                 </span>
              </div>
              <hr />
              <div className="left-sty-bottom">
                <h2 className="headsty1">TWITTER</h2>
                <span className="mainpara1">
                Do you know @tastysuperhero ? The dutch studio
                 didn’t come to #KIKK19 to speak about pastry 
                 but well about how they… https://t.co/d8NmFjU8hk
                </span>
              </div>
              <div className="right-sty-div">
              <h1 className="right-head-sty">Get the latest info about KIKK</h1>
              <span className="rightsty">
              You wish to know everything about
               KIKK before everybody does and be 
               the center of attention, get our newsletter.
              </span>
              </div>
            </div>
        )
    }
}
export default MainCard1;