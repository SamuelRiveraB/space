import React from "react";
import "./CrewMenu.css";
import { Outlet, NavLink } from "react-router-dom";

function CrewMenu() {
    return (
        <>
            <div className="crew-menus">
                <NavLink className={({ isActive }) => (isActive ? "menu-circle crew-active":"menu-circle")} to="/space/crew/douglas-hurley"></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menu-circle crew-active":"menu-circle")} to="/space/crew/mark-shuttleworth"></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menu-circle crew-active":"menu-circle")} to="/space/crew/victor-glover"></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "menu-circle crew-active":"menu-circle")} to="/space/crew/anousheh-ansari"></NavLink>
            </div>
        <Outlet />
        </>
    );
}

export default CrewMenu;