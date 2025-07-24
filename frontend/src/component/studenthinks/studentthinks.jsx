import React, { useEffect, useState } from 'react';
import './studentthinks.css';
import Navbar from '../navbar/Navbar'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Add this at top
import Footer from '../footer/footer';

function StudentThinks() {
  const Navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
  <>
    <navbar><Navbar/></navbar> 
    <div className='container-fluid color'>  
       <div className="student-thinks-container container pb-5 pt-5">
              <h1 className='mb-5'>View All Found Items</h1>
              <p>These are items submitted to the College Office and posted by the Admin after verification.
If you believe one of them belongs to you, visit the College Office in person with proper proof to claim it.</p>
<div className='item'>
<h1>Recently Found Items:</h1>
              <div className="card-grid">
               {users.length === 0 ? (
                <p>No user data available.</p>
                ) : (
               users.map((user) => (
               <Link to={`/thing/${user._id}`} key={user._id} className="card-link"> 
              <div className="card" key={user._id}>
                 {user.image && (
                <img src={user.image} alt="user upload" className="card-img" />
              )}
              <h3>{user.topic}</h3>
              <p>{user.description}</p>
              <div className='text-end'>more detials...</div>
            </div>
            </Link>
          ))
        )}
      </div>
 </div>     
      <h1 className='mt-5'>How to Claim an Item</h1>
      <p>1. Visit the College Office in person.</p>
      <p>2. Bring proof or describe item details.</p>
      <p>3. If verified, the item will be returned to you.</p>
      <h1>Claim Reminder:</h1>
      <p>- No online claim button.</p>
      <p>- All found items must be claimed physically from the office.</p>
      <p>- Only students of Mailam Engineering College can claim.</p>
      <h1>Help Others:</h1>
      <p>If you've found something not listed here, please submit it to the College Office so it can be safely returned.</p>
      <p></p>
            </div>
    </div>  
      <footer><Footer/></footer>
    </>
  );
}

export default StudentThinks;
