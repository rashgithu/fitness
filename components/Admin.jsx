import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Predefined valid credentials
    const validEmail = 'rashmitad959@gmail.com';
    const validName = 'Rashmita Das';
    const validPassword = '1234';

    // Check if the entered details match the valid credentials
    if (email === validEmail && name === validName && password === validPassword) {
      alert('Admin login successful!');
      navigate('/admin-panel'); // Redirect to the admin panel
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="admin-page">
      <div className="admin-container">
        <h1 className="page-title">Admin Login</h1>
        <p className="description">Enter your credentials to access the admin panel.</p>

        <form className="admin-form" onSubmit={handleAdminLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Log In</button>
        </form>

        {error && (
          <div className="login-error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admin;
