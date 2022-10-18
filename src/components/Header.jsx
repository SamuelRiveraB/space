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
    let bg1 = 'url('+img1+') no-repeat center center fixed';
    let bg2 = 'url('+img2+') no-repeat center center fixed';
    let bg3 = 'url('+img3+') no-repeat center center fixed';
    let bg4 = 'url('+img4+') no-repeat center center fixed';

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
        let desktopPath = "";
        let mobilePath = "";
        let tabletPath = "";
        const full = document.getElementsByClassName("full")[0];

        if(pathname.includes("home")) {
            desktopPath = "/static/media/background-home-desktop.cdf3864ecbfdf20e8c3b.jpg";
            mobilePath = "/static/media/background-home-mobile.13f7adecbcb3c3f170d8.jpg";
            tabletPath = "/static/media/background-home-tablet.bc9efcc3281fa6801077.jpg";
            full.style.background = bg1;
        } else if(pathname.includes("destination")) {
            desktopPath = "/static/media/background-destination-desktop.468b922c69bf5499b4bc.jpg";
            mobilePath = "/static/media/background-destination-mobile.e0131e27e751ead1a922.jpg";
            tabletPath = "/static/media/background-destination-tablet.8f55d346d8b6cfd95ab7.jpg";
            full.style.background = bg2;
        } else if(pathname.includes("crew")) {
            desktopPath = "/static/media/background-crew-desktop.88a3c692fd34eb311e04.jpg";
            mobilePath = "/static/media/background-crew-mobile.9ca0b46f4744d08e5561.jpg";
            tabletPath = "/static/media/background-crew-tablet.16d51cf61e98ce45eb61.jpg";
            full.style.background = bg3;
        } else if(pathname.includes("technology")) {
            desktopPath = "/static/media/background-technology-desktop.b7b589b3c0c5ef0811d4.jpg";
            mobilePath = "/static/media/background-technology-mobile.175f34f61838f8a38aaf.jpg";
            tabletPath = "/static/media/background-technology-tablet.48c38b028217ee0096c4.jpg";
            full.style.background = bg4;
        }
        full.style.backgroundSize = "100% 100%";
        function responsiveBg() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                full.style.background = full.style.background.replace(mobilePath, tabletPath);
                full.style.background = full.style.background.replace(desktopPath, tabletPath);
                console.log(full.style.background);
                console.log("Tablet");
            } else if (window.innerWidth >= 1200) {
                full.style.background = full.style.background.replace(mobilePath, desktopPath);
                full.style.background = full.style.background.replace(tabletPath, desktopPath);
                console.log(full.style.background);
                console.log("PC");
            } else if(window.length < 768) {
                full.style.background = full.style.background.replace(desktopPath, mobilePath);
                full.style.background = full.style.background.replace(tabletPath, mobilePath);
                console.log(full.style.background);
                console.log("Mobile");
            }
            console.log("resize: "+window.innerWidth+" x "+ window.innerHeight);
        }
        window.addEventListener('resize', responsiveBg);
    })

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