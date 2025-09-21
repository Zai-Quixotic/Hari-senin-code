

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'; // 
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [currentView, setCurrentView] = useState('login');

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login'); 
  };


  const switchToRegister = () => setCurrentView('register');
  const switchToLogin = () => setCurrentView('login');


  const renderForm = () => {
    if (currentView === 'login') {
    
      return <LoginForm onLogin={handleLogin} onSwitchToRegister={switchToRegister} />;
    } else {

      return <RegistrationForm onSwitchToLogin={switchToLogin} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {currentUser ? (
          <div className="welcome-container">
            <h1>Selamat Datang, {currentUser}! 👋</h1>
            <p>Anda telah berhasil login.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
       
          renderForm()
        )}
      </header>
    </div>
  );
}

export default App;