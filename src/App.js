import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AppRoutes from './router';
import './styles/index.css';

const App = () => (
    <div className="app">
        <Header />
        <div className="main-content">
            <Sidebar />
            <div className="content">
                <AppRoutes />
            </div>
        </div>
        <Footer />
    </div>
);

export default App;
