import React from 'react';
import '../styles/Header.css';

const Header = () => (
    <header className="header">
        <div className="logo">Pixiv Clone</div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/rankings">Rankings</a></li>
                <li><a href="/user">User</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
