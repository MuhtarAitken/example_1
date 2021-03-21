import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.gold}`}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/News">News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Setting">Setting</NavLink>
            </div>
        </nav>);
}
export default Navbar;