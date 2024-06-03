import React from 'react';
import '../styles/Home.css';

const Home = () => (
    <div className="home">
        <h1>Home</h1>
        <div className="gallery">
            <div className="gallery-item">
                <img src="https://via.placeholder.com/150" alt="Gallery Item" />
            </div>
            <div className="gallery-item">
                <img src="https://via.placeholder.com/150" alt="Gallery Item" />
            </div>
            <div className="gallery-item">
                <img src="https://via.placeholder.com/150" alt="Gallery Item" />
            </div>
        </div>
    </div>
);

export default Home;
