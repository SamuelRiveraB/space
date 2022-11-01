import React from "react";
import "./Header.css";
import logo from '../assets/shared/logo.svg';
import { Outlet, NavLink, useLocation } from "react-router-dom";
import nav from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import img1 from "../assets/home/background-home-desktop.jpg";
import img1m from "../assets/home/background-home-mobile.jpg";
import img1t from "../assets/home/background-home-tablet.jpg";
import img2 from "../assets/destination/background-destination-desktop.jpg";
import img2m from "../assets/destination/background-destination-mobile.jpg";
import img2t from "../assets/destination/background-destination-tablet.jpg";
import img3 from "../assets/crew/background-crew-desktop.jpg";
import img3m from "../assets/crew/background-crew-mobile.jpg";
import img3t from "../assets/crew/background-crew-tablet.jpg";
import img4 from "../assets/technology/background-technology-desktop.jpg";
import img4m from "../assets/technology/background-technology-mobile.jpg";
import img4t from "../assets/technology/background-technology-tablet.jpg";

function Header() {
    let bg1 = 'url('+img1+') no-repeat center center fixed';
    let bg1m = 'url('+img1m+') no-repeat center center fixed';
    let bg1t = 'url('+img1t+') no-repeat center center fixed';
    let bg2 = 'url('+img2+') no-repeat center center fixed';
    let bg2m = 'url('+img2m+') no-repeat center center fixed';
    let bg2t = 'url('+img2t+') no-repeat center center fixed';
    let bg3 = 'url('+img3+') no-repeat center center fixed';
    let bg3m = 'url('+img3m+') no-repeat center center fixed';
    let bg3t = 'url('+img3t+') no-repeat center center fixed';
    let bg4 = 'url('+img4+') no-repeat center center fixed';
    let bg4m = 'url('+img4m+') no-repeat center center fixed';
    let bg4t = 'url('+img4t+') no-repeat center center fixed';

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

    React.useEffect(() => {
        const full = document.getElementsByClassName("full")[0];
        if(pathname.includes("home")) {
            full.style.background = bg1;
        } else if(pathname.includes("destination")) {
            full.style.background = bg2;
        } else if(pathname.includes("crew")) {
            full.style.background = bg3;
        } else if(pathname.includes("technology")) {
            full.style.background = bg4;
        }
        full.style.backgroundSize = "100% 100%";
        function responsiveBg() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                if(pathname.includes("home")) {
                    full.style.background = bg1t;
                } else if(pathname.includes("destination")) {
                    full.style.background = bg2t;
                } else if(pathname.includes("crew")) {
                    full.style.background = bg3t;
                } else if(pathname.includes("technology")) {
                    full.style.background = bg4t;
                }
                console.log(full.style.background);
                console.log("Tablet");
            } else if (window.innerWidth >= 1200) {
                if(pathname.includes("home")) {
                    full.style.background = bg1;
                } else if(pathname.includes("destination")) {
                    full.style.background = bg2;
                } else if(pathname.includes("crew")) {
                    full.style.background = bg3;
                } else if(pathname.includes("technology")) {
                    full.style.background = bg4;
                }
                console.log(full.style.background);
                console.log("PC");
            } else if(window.length < 768) {
                if(pathname.includes("home")) {
                    full.style.background = bg1m;
                } else if(pathname.includes("destination")) {
                    full.style.background = bg2m;
                } else if(pathname.includes("crew")) {
                    full.style.background = bg3m;
                } else if(pathname.includes("technology")) {
                    full.style.background = bg4m;
                }
                console.log(full.style.background);
                console.log("Mobile");
            }
            full.style.backgroundSize = "100% 100%";
            console.log("resize: "+window.innerWidth+" x "+ window.innerHeight);
        }
        window.addEventListener('resize', responsiveBg);
    })

    function imgClick() {
        window.location='/space#/home';
    }

    return (
        <>
            <div className="full"></div>
            <nav className="header">
                <div className="left-header">
                        <img onClick={imgClick} src={logo} className="logo" alt="logo" />
                    <hr className="line"/>
                </div>
                <div className="right-header">
                    <img src={close} className="nav-btn" alt="nav" onClick={navBar}/>
                    <ul className="header-menus">
                        <li><NavLink onClick={() => changeBg(bg1)} className="menu" to="home"><strong className="menu-number">00</strong>HOME</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg2)} className={({ isActive }) =>  (["/destination/moon", "/destination/mars", "/destination/europa", "/destination/titan"].includes(pathname) ? "menu active":"menu")} to="destination/moon"><strong className="menu-number">01</strong>DESTINATION</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg3)} className={({ isActive }) =>  (["/crew/douglas-hurley", "/crew/mark-shuttleworth", "/crew/victor-glover", "/crew/anousheh-ansari"].includes(pathname) ? "menu active":"menu")} to="crew/douglas-hurley"><strong className="menu-number">02</strong>CREW</NavLink></li>
                        <li><NavLink onClick={() => changeBg(bg4)} className={({ isActive }) =>  (["/technology/launch-vehicle", "/technology/spaceport", "/technology/space-capsule"].includes(pathname) ? "menu active":"menu")} to="technology/launch-vehicle"><strong className="menu-number">03</strong>TECHNOLOGY</NavLink></li>
                    </ul>
                </div>
            </nav>
        <Outlet />
        </>
    );
}

export default Header;