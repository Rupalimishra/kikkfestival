import React, { Component } from 'react';
import './Navigation.css';
class Navigation extends Component {
    render() {
        return(
            <div className="container center">
          <nav className="menu">
          <h1 className="menu_logo"></h1>
          <ul className="menu_list">
            <li className="menu_list-item"><a className="menu_link" href="#">LIVE</a></li>
            <li className="menu_list-item"><a className="menu_link" href="#">PROGRAM
              <ul className="dropdown-content">
              <li>CONFERENCES</li>
              <li>EXHIBITION</li>
              <li>KIKK IN TOWN</li>
              <li>MARKET</li>
              <li>LITTLE KIKK</li>
              <li>WORKSHOPS</li>
              <li>PRACTICES</li>
              <li>PRO VILLAGE</li>
              <li>BELFIUS AWARD</li>
              <li>REBOOT</li>
            </ul>
            </a></li>
            <li className="menu_list-item"><a className="menu_link" href="#">TIMETABLE</a></li>
            <li className="menu_list-item"><a className="menu_link" href="#">PRACTICAL</a></li>
            <li className="menu_list-item"><a className="menu_link" href="#">ABOUT</a></li>
            <li className="menu_list-item"><a className="menu_link" href="#">SPONSORS</a></li>
              <button className="menu_button">Get tickets</button>
          </ul>
        </nav>
      </div>
        )
    }
}
export default Navigation;