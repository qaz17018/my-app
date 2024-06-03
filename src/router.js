import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Rankings from './pages/Rankings';
import User from './pages/User';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/user" element={<User />} />
        </Routes>
    </Router>
);

export default AppRoutes;
