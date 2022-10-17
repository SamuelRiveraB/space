import React from "react";
import "./Header.css";
import logo from '../assets/shared/logo.svg';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import nav from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import img1 from "../assets/home/background-home-desktop.jpg";
import img2 from "../assets/destination/background-destination-desktop.jpg";
import img3 from "../assets/crew/background-crew-desktop.jpg";
import img4 from "../assets/technology/background-technology-desktop.jpg";

function Header() {
    const bg1 = 'url('+img1+') no-repeat center center fixed';
    const bg2 = 'url('+img2+') no-repeat center center fixed';
    const bg3 = 'url('+img3+') no-repeat center center fixed';
    const bg4 = 'url('+img4+') no-repeat center center fixed';
    const { pathname } = useLocation();

    function changeBg(path) {
        document.getElementsByClassName("full")[0].style.background = path;
        document.getElementsByClassName("full")[0].style.backgroundSize = "100% 100%";
    }

    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
            navImg.src = close;
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
            navImg.src = nav;
        }
    }

    return (
        <>
            <div className="full"></div>
            <nav className="header">
                <div className="left-header">
                    <img src={logo} className="logo" alt="logo" />
                    <hr className="line"/>
                </div>
                <div className="right-header">
                    <img src={close} className="nav-btn" alt="nav" onClick={navBar}/>
                    <ul className="header-menus">
                        <li><NavLink onClick={() => changeBg(bg1)} className="menu" to="home"><strong className="menu-number">00</strong>HOME</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg2)} className={({ isActive }) =>  (["/destination/moon", "/destination/mars", "/destination/europa", "/destination/titan"].includes(pathname) ? "menu active":"menu")} to="/destination/moon"><strong className="menu-number">01</strong>DESTINATION</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg3)} className={({ isActive }) =>  (["/crew/douglas-hurley", "/crew/mark-shuttleworth", "/crew/victor-glover", "/crew/anousheh-ansari"].includes(pathname) ? "menu active":"menu")} to="/crew/douglas-hurley"><strong className="menu-number">02</strong>CREW</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg4)} className={({ isActive }) =>  (["/technology/launch-vehicle", "/technology/spaceport", "/technology/space-capsule"].includes(pathname) ? "menu active":"menu")} to="/technology/launch-vehicle"><strong className="menu-number">03</strong>TECHNOLOGY</NavLink></li>
                    </ul>
                </div>
            </nav>
        <Outlet />
        </>
    );
}

export default Header;