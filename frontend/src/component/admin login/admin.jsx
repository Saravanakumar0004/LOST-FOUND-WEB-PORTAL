import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import Navbar from '../navbar/Navbar';

function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Optional: Check if admin
      if (!data.isAdmin) {
        throw new Error('Access denied: Admins only');
      }

      // Store token (optional)
      localStorage.setItem('token', data.token);
      localStorage.setItem('admin', JSON.stringify(data));

      // Redirect to admin dashboard
      navigate('/adminlogin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={onChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      </div>
      <footer></footer>
    </>
  );
}

export default AdminLogin;
