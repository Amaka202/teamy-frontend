import React, { Component } from 'react';
import Logo from '../logo/Logo';
import Nav from '../Nav';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
               <Nav /> 
            </div>
        )
    }
}
