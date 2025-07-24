import React, { useState } from 'react';
import './adminlogin.css'
import { useNavigate } from 'react-router-dom';
function AdminForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    image: '',
    studentName: '',
    department: '',
    date: '',
    time: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); // optional: add if using JWT

      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // 🔐 Only if token is required
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      alert('Data Created successfully');
      setError('');
      setFormData({
        topic: '',
        description: '',
        image: '',
        studentName: '',
        department: '',
        date: '',
        time: '',
      });
    } catch (err) {
      alert(`Error: ${err.message}`);
      setMessage('');
    }
  };

  return (
    <>
     <navbar className='navbar navbar2'>
      <div className="adminlogin">
        <h3 className='logout pe-5' onClick={() =>{ navigate('/deletedata')}} >Delete & Update</h3>
      </div>
        <div className="adminlogin">
           <h3 className='logout' onClick={() =>{ navigate('/')}} >Logout<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right pb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></h3>
        </div>
    </navbar>
    <div className="create">
    <div className="admin-form">
      <h2>Create Found Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" value={formData.topic} onChange={handleChange} placeholder="Topic" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="Submited Student Name" required />
        <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
    </>
  );
}

export default AdminForm;
