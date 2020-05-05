import React from 'react';
import './MianHeader.css';

const MianHeader = (props) => {
    return(
        <div>
            <div className="div-left-style">
             <span>English</span>
             <div className="dropdown-content-sty">
                 <h4>Francais</h4>
             </div>
            </div>
            <div className="div-right-main-sty">
              <h3>Download the kikk Festival App:ios/Android</h3>
            </div>
        </div>
    )
}
export default MianHeader;