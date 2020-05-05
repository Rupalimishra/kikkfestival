import React from 'react';
import "./Header.css";

const Header = (props) => {
    return(
        <header>
            <nav>
                <div className="nav-head-sty">
                <h1>Kikk festival</h1>
                </div>
               
            <ul className="menu_list">
            <li className="menu_list-item"> <a href="#" className="left">LIVE</a></li>
            
            <div className="dropdown">
            <li className="menu_list-item"> <a href="#" className="left">PROGRAM</a>
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
            </div>
            <li className="menu_list-item"><a href="#" className="left">TIMETABLE</a></li>
            <li className="menu_list-item"><a href="#" className="left">PRACTICAL</a></li>
            <li className="menu_list-item"><a href="#" className="left">ABOUT</a></li>
            <li className="menu_list-item"><a href="#" className="left">SPONSORS</a></li>
             <ul className="menu_button">
                 <li className="hide-style"><i className="arrow">Get tickets</i></li>
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