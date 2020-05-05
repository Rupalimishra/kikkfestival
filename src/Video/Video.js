import React from 'react';
import Image1 from '../Image1/Image1';
import './Video.css';

const Video =(props) =>{
return(
    
        <div>
            <video autoPlay loop muted
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
                position:"relative",
                top: "-57px",
                bottom:"59px"
            }}>
                <source src="https://www.kikk.be/2017/files/templates/kikk2017/public/assets/videos/king-kong.mp4?v=2" />
            </video>
        <div className="test_style"> 
         <h3 className="event-date">NOV 02 - 04 <sup>TH</sup> 2017</h3>
         <h4 className="event-location">NAMUP, BELGUM</h4>

         <Image1 />
         
         
        </div>
    </div>

    
    )
}

export default Video;

