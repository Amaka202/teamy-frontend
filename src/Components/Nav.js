import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/posts'>Posts</Link>
                </li>
                <li>
                    <Link to='/users'>Members</Link>
                </li>
            </ul>
        </div>
    )
}
