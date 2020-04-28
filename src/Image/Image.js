import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter,faInstragram, faVimeo } from '@fortawesome/free-solid-svg-icons'
import './Image.css';
class Image extends Component {
    render() {
        return(
            <div className="Icon_style">
                <p>Follow us</p>
                <ul>
                    <li>
                       <link>
                       <FontAwesomeIcon icon={faFacebook} />
                       </link>
                       <link>
                       <FontAwesomeIcon  icon={faTwitter}/>
                       </link>
                       <link>
                       <FontAwesomeIcon  icon={faInstragram}/>
                       </link>
                       <link>
                       <FontAwesomeIcon  icon={faVimeo}/>
                       </link>
                

                    </li>
                </ul>
            
            </div>
        )
    }
}
export default  Image;