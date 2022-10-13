import React from "react";
import "./Header.css";
import logo from '../assets/shared/logo.svg';

function Header() {
    return (
        <nav className="header">
            <div className="left-header">
                <img src={logo} className="logo" alt="logo" />
                <hr className="line"/>
            </div>
            <div className="right-header">
                 <ul className="header-menus">
                    <li><a className="menu active" href="./"><strong className="menu-number">00</strong>HOME</a></li>
                    <li><a className="menu" href="./"><strong className="menu-number">01</strong>DESTINATION</a></li>
                    <li><a className="menu" href="./"><strong className="menu-number">02</strong>CREW</a></li>
                    <li><a className="menu" href="./"><strong className="menu-number">03</strong>TECHNOLOGY</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;