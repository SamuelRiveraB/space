import React from "react";
import "./Destination.css";
import sourceImg from '../assets/destination/image-titan.png';
import { Outlet, Link } from "react-router-dom";

function Destination4() {
    return (
        <div>
            <div className="destination-container">
                <div className="destination-left-side">
                    <p className="pick-your-destination"><strong className="title-number">01</strong>PICK YOUR DESTINATION</p>
                    <img src={sourceImg} className="destination-img" alt="dst-img" />
                </div>
                <div className="destination-right-side">
                    <ul className="destination-menus">
                        <li><Link className="destination-menu" to="/destination/moon">MOON</Link></li>
                        <li><Link className="destination-menu" to="/destination/mars">MARS</Link></li>
                        <li><Link className="destination-menu" to="/destination/europa">EUROPA</Link></li>
                        <li><Link className="destination-menu active" to="/destination/titan">TITAN</Link></li>
                    </ul>
                    <h1 className="destination-title">TITAN</h1>
                    <p className="destination-text">The only moon known to have a dense atmosphere other than Earth, Titan 
                        is a home away from home (just a few hundred degrees colder!). As a 
                        bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <hr className="underline"/>
                    <div className="bottom-container">
                        <div className="bottom-left">
                            <p className="title-bottom-left">AVG. DISTANCE</p>
                            <p className="cont-bottom-left">1.6 BIL. KM</p>
                        </div>
                        <div className="bottom-right">
                            <p className="title-bottom-right">EST. TRAVEL TIME</p>
                            <p className="cont-bottom-right">7 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Destination4;