import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo';
import Nav2 from './Nav2';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>    
                <Nav2 /> 
            </div>
        )
    }
}