import React from 'react';
import "./Header.css";

const Header = (props) => {
    return(
        <header>
            <nav>
            <ul className="menu_list">
            <li className="menu_list-item">LIVE</li>
            <li className="menu_list-item">PROGRAM
            <div>
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
            </div>
             
            </li>
            <li className="menu_list-item">TIMETABLE</li>
            <li className="menu_list-item">PRACTICAL</li>
            <li className="menu_list-item">ABOUT</li>
            <li className="menu_list-item">SPONSORS</li>
             <ul className="menu_button">
                 <li className="hide-style">Get tickets</li>
                 </ul>
                 <ul className="menu_button1">
                     <li>Free tickets</li>
                 </ul>
                 <ul className="menu_button2">
                 <li>Pass tickets</li>
                 </ul>
                
          </ul>
            </nav>
        </header>
    )
}
export default Header;