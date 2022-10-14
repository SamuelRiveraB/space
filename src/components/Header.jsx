import React from "react";
import "./Header.css";
import logo from '../assets/shared/logo.svg';
import { Outlet, NavLink, useLocation } from "react-router-dom";

function Header() {
    const { pathname } = useLocation();
    return (
        <>
            <nav className="header">
                <div className="left-header">
                    <img src={logo} className="logo" alt="logo" />
                    <hr className="line"/>
                </div>
                <div className="right-header">
                    <ul className="header-menus">
                        <li><NavLink className="menu" to="home"><strong className="menu-number">00</strong>HOME</NavLink></li>
                        <li><NavLink className={({ isActive }) =>  (["/destination/moon", "/destination/mars", "/destination/europa", "/destination/titan"].includes(pathname) ? "menu active":"menu")} to="/destination/moon"><strong className="menu-number">01</strong>DESTINATION</NavLink></li>
                        <li><NavLink className="menu" to="crew"><strong className="menu-number">02</strong>CREW</NavLink></li>
                        <li><NavLink className="menu" to="technology"><strong className="menu-number">03</strong>TECHNOLOGY</NavLink></li>
                    </ul>
                </div>
            </nav>
        <Outlet />  
        </>
    );
}

export default Header;