import React from 'react'
import { NavLink } from "react-router-dom";
import "./header.css";


export default function Nav() {
    return (
        <div className="nav-container">
            <ul>
                <li>
                    <NavLink to='/' style={{ textDecoration: 'none' }} className="link-class" activeClassName="actie">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/login' style={{ textDecoration: 'none' }} className="link-class" activeClassName="active">Login</NavLink>
                </li>
            </ul>
        </div>
    )
}
