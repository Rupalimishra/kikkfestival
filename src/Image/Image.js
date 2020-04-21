import React, { Component } from 'react'; 
import './Image.css';
class Image extends Component {
    render() {
        return(
            <div className="Icon_style">
                <p>Follow us</p>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/KIKK.Festival" target="_blank">
                            <span className="u-visually-hidden"></span>
                        </a>
                    </li>
                </ul>
            
            </div>
        )
    }
}
export default  Image;