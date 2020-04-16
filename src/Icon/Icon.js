import React, { Component } from 'react';
import './Icon.css';
class Icon extends Component {
    render() {
        return(
            <div className="Icon_style">
                <h4 className="Icon_style">FOLLOW US</h4>
                <a href="https://www.facebook.com/">facebook</a>
                <a href="https://twitter.com/login">twitter</a>
                <a href="https://www.instagram.com/">instragram</a>
                <a href="https://vimeo.com/kikkfestival">vimeo</a>
            </div>
        )
    }
}
export default  Icon;