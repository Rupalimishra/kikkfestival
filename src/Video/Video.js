import React from 'react';
import Textstyle from '../Textstyle/Textstyle';
import Icon from '../Icon/Icon';
import './Video.css';

const Video =(props) =>{
return(
    
        <div>
        <video src="https://www.kikk.be/2017/files/templates/kikk2017/public/assets/videos/king-kong.mp4?v=2"></video>
        <div className="test_style"> 
         <h3>NOV 02 - 04 <sup>TH</sup> 2017</h3>
         <h4>NAMUP, BELGUM</h4>



         <Textstyle />
         <Icon />
         
        </div>
    </div>

    
    )
}

export default Video;

// function myFunction() {
//     if (video.paused) {
//       video.play();
//       btn.innerHTML = "Pause";
//     } else {
//       video.pause();
//       btn.innerHTML = "Play";
//     }
// }
