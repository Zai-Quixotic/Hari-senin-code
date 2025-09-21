

import React, { useState } from 'react';

function RegistrationForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && password) {
      alert(`Pendaftaran berhasil untuk user: ${username}`);
 
      onSwitchToLogin();
    } else {
      alert('Semua field harus diisi!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Daftar Akun Baru</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Buat username Anda"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email Anda"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Buat password yang kuat"
        />
      </div>
      <button type="submit">Daftar</button>
      <p className="switch-form">
        Sudah punya akun? <span onClick={onSwitchToLogin}>Login di sini</span>
      </p>
    </form>
  );
}

export default RegistrationForm;