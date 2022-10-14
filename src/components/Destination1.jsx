import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-moon.png';
import { Outlet, Link } from "react-router-dom";

function Destination1() {
    return (
        <div>
            <div className="destination-container">
                <div className="destination-left-side">
                    <p className="pick-your-destination"><strong className="title-number">01</strong>PICK YOUR DESTINATION</p>
                    <img src={sourceImg} className="destination-img" alt="dst-img" />
                </div>
                <div className="destination-right-side">
                    <ul className="destination-menus">
                        <li><Link className="destination-menu active" to="/destination/moon">MOON</Link></li>
                        <li><Link className="destination-menu" to="/destination/mars">MARS</Link></li>
                        <li><Link className="destination-menu" to="/destination/europa">EUROPA</Link></li>
                        <li><Link className="destination-menu" to="/destination/titan">TITAN</Link></li>
                    </ul>
                    <h1 className="destination-title">MOON</h1>
                    <p className="destination-text">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <hr className="underline"/>
                    <div className="bottom-container">
                        <div className="bottom-left">
                            <p className="title-bottom-left">AVG. DISTANCE</p>
                            <p className="cont-bottom-left">384,400 km</p>
                        </div>
                        <div className="bottom-right">
                            <p className="title-bottom-right">EST. TRAVEL TIME</p>
                            <p className="cont-bottom-right">3 DAYS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Destination1;