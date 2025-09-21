

import React from 'react';
import './HomePage.css'; 
import phoneMockup from './assets/iPhone 12 Pro.png'; 


function HomePage({ currentUser, onLogout }) {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          
    
          <div className="welcome-message">
            <span>Selamat datang, <strong>{currentUser}!</strong></span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>

          <p className="sub-heading">Movie Streaming Platform</p>
          <h1>Chill</h1>
          <p>
            Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill juga dilengkapi antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai menonton secara instan.
          </p>
        </div>

      
        <div className="hero-image">
        
          <img src={phoneMockup} alt="Aplikasi Chill di Ponsel" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;