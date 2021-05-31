import React from 'react'
import Logo from '../logo.png';

export default function Header() {
    return (
        <div id='header'>
            <div id='header-container'>
                <img src={Logo} alt='logo' id='logo' />
                <h1 id='title'>Reddit</h1>
            </div>
        </div>
    )
}
