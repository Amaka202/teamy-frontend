import React from 'react'
import { Link } from "react-router-dom";
import "./header.css";


export default function Nav() {
    return (
        <div className="nav-container">
            <ul>
                <li>
                    <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
                </li>
                <li>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link>
                </li>
                <li>
                    <Link to='/posts' style={{ textDecoration: 'none' }}>Posts</Link>
                </li>
                <li>
                    <Link to='/users' style={{ textDecoration: 'none' }}>Members</Link>
                </li>
            </ul>
        </div>
    )
}
