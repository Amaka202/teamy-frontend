import React from 'react'
import { NavLink } from "react-router-dom";
import "./header.css";


export default function Nav() {
    return (
        <div className="nav-container">
            <ul>
                <li>
                    <NavLink to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/login' style={{ textDecoration: 'none' }}>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/posts' style={{ textDecoration: 'none' }}>Posts</NavLink>
                </li>
                <li>
                    <NavLink to='/users' style={{ textDecoration: 'none' }}>Members</NavLink>
                </li>
            </ul>
        </div>
    )
}
