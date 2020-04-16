import React, { Component } from 'react';
// import Logo from '../Logo/Logo';
import './Navigation.css';
class Navigation extends Component {
    render() {
        return(
          <div className="container center">
            {/* <Logo /> */}
          <nav className="menu">
          <h1 className="menu_logo"></h1>
          <ul className="menu_list">
            <li className="menu_list-item">LIVE</li>
            <li className="menu_list-item">PROGRAM
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
            </li>
            <li className="menu_list-item">TIMETABLE</li>
            <li className="menu_list-item">PRACTICAL</li>
            <li className="menu_list-item">ABOUT</li>
            <li className="menu_list-item">SPONSORS</li>
              <button className="menu_button">Get tickets</button>
          </ul>
        </nav>
      </div>
        )
    }
}
export default Navigation;