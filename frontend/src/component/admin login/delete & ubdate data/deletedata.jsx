import React, { useEffect, useState } from 'react';
import './deletedata.css';
import { useNavigate } from 'react-router-dom';

function DeleteData() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError('❌ Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');

      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Delete failed');

      setData(data.filter(item => item._id !== id));
      alert(`✅ ${result.message}`);
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
    }
  };

  const handleUpdateRedirect = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <>
      <navbar className='navbar navbar2'>
        <div className="adminlogin">
          <h3 className='logout pe-5' onClick={() => navigate('/adminlogin')}>Create Data</h3>
        </div>
        <div className="adminlogin">
          <h3 className='logout' onClick={() => navigate('/')}>Logout <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right pb-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></h3>
        </div>
      </navbar>

      <div className="delete-page">
        <h1>Update & Delete All Data</h1>
        {error && <p className="error">{error}</p>}

        <div className="card-grid">
          {data.map((item) => (
            <div key={item._id} className="card">
              <h3>{item.topic}</h3>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Student:</strong> {item.studentName}</p>
              <p><strong>Dept:</strong> {item.department}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Time:</strong> {item.time}</p>
              {item.image && <img src={item.image} alt="uploaded" className="card-image" />}
              <div className="card-buttons">
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                <button onClick={() => handleUpdateRedirect(item._id)}>Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DeleteData;
