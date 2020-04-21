import React, { Component } from 'react'; 
import './Icon.css';
class Icon extends Component {
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
export default  Icon;