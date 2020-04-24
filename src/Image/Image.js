import React, { Component } from 'react'; 
import './Image.css';
class Image extends Component {
    render() {
        return(
            <div className="Icon_style">
                <p>Follow us</p>
                <ul>
                    <li>
                    <a href="#" className="fa fa-facebook"></a>

                    </li>
                </ul>
            
            </div>
        )
    }
}
export default  Image;