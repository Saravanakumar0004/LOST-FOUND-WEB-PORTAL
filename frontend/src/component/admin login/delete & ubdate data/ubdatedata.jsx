import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ubdatedata.css';

function UpdateData() {
  const { id } = useParams();
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
  const [loading, setLoading] = useState(true);

  // Fetch existing data for this ID
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${id}`);
        const result = await res.json();

        if (res.ok) {
          setFormData(result);
          setError('');
        } else {
          setError(result.message || 'Failed to fetch item');
        }
      } catch (err) {
        setError('❌ Failed to fetch item data');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || 'Update failed');

      setMessage('✅ Data updated successfully!');
      setError('');
      setTimeout(() => navigate('/deletedata'), 1500);
    } catch (err) {
      setMessage('');
    }
  };

  if (loading) return <div className="update-container">Loading...</div>;

  return (
    <>
    <navbar className='navbar navbar2'>
        <div className="adminlogin">
        <h3 className='logout pe-5' onClick={() =>{ navigate('/deletedata')}} >Delete</h3>
      </div>
        <div className="adminlogin">
          <h3 className='logout pe-5' onClick={() => navigate('/adminlogin')}>Create Data</h3>
        </div>
        <div className="adminlogin">
          <h3 className='logout' onClick={() => navigate('/')}>Logout<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right pb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></h3>
        </div>
      </navbar>
    <div className="ubdate">
    <div className="update-container">
      <h2>Update User Data</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={onChange}
          placeholder="Topic"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={onChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={onChange}
          placeholder="Student Name"
          required
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={onChange}
          placeholder="Department"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={onChange}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={onChange}
        />

        <button type="submit">Update</button>
      </form>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
    </div>
    </>
  );
}

export default UpdateData;
