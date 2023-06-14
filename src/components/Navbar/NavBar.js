import React from 'react';
import {NavLink} from "react-router-dom";
import DarkModeButton from "../UI/DarkModeButton/DarkModeButton";
import './style.css'


const NavBar = () => {
    const isActiveCallback = ({isActive}) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink className="logo" to={'/'}>
                        <strong>Freelancer</strong>
                    </NavLink>

                    <DarkModeButton/>

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink to={'/'} className={isActiveCallback}>Home</NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to={'/about'} className={isActiveCallback}>About</NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to={'/projects'} className={isActiveCallback}>
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to={'/contacts'} className={isActiveCallback}>
                                Contacts
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
