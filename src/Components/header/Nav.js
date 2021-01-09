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
                    <NavLink to='/posts' style={{ textDecoration: 'none' }} className="link-class" activeClassName="active">Posts</NavLink>
                </li>
                <li>
                    <NavLink to='/login' style={{ textDecoration: 'none' }} className="link-class" activeClassName="active">Login</NavLink>
                </li>
                <li>
                    <NavLink to='/users' style={{ textDecoration: 'none' }} className="link-class" activeClassName="active">Members</NavLink>
                </li>
                <li>
                    <NavLink to='/user' style={{ textDecoration: 'none' }} className="link-class" activeClassName="activ">
                        <img src={`https://res.cloudinary.com/amaka01/image/upload/v1609578087/cg3mtemxniugidu73ewn.jpg`} id="member-icon" alt="dp"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
