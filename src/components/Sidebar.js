import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => (
    <aside className="sidebar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/rankings">Rankings</a></li>
            <li><a href="/user">User</a></li>
        </ul>
    </aside>
);

export default Sidebar;
