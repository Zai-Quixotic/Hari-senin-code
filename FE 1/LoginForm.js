

import React, { useState } from 'react';


function LoginForm({ onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (username && password) {
      onLogin(username);
    } else {
      alert('Username dan Password tidak boleh kosong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Masukkan username"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
        />
      </div>
      <button type="submit">Login</button>
      
     
      <p className="switch-form">
        Belum punya akun? <span onClick={onSwitchToRegister}>Daftar di sini</span>
      </p>
    </form>
    
  );
}

export default LoginForm;