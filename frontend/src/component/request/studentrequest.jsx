import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar'
import axios from 'axios';
import './studentrequest.css'; // Create this CSS file
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
function StudentRequest() {
  const Navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/goals');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (

    <>
    <navbar><Navbar/></navbar>
    <div className="container notice">
    <h1>Lost Item Reports – Student Notice Board</h1>
    <p>These messages were submitted by students of Mailam Engineering College to report lost items. <br />
If you've seen or found any of these items, kindly submit them to the College Office to help return them to their rightful owners.</p>
    <div className='container'>  
    <div className="student-request-container container mt-5">
        <h2>Recent Lost Item Messages</h2>
        <p className='report'><b>Each report is formatted like a short personal message or request, viewable by all students:</b></p>
        {requests.length === 0 ? (
          <p>No requests found.</p>
        ) : (
          <ul className="request-list">
            {requests.map((req) => (
              <li key={req._id} className="request-card">
                <h3>{req.name}</h3>
                {/* <p><strong>Email:</strong> {req.email}</p> */}
                <p><strong>Department:</strong> {req.department}</p>
                <p><strong>Subject:</strong> {req.subject}</p>
                <p><strong>Description:</strong> {req.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
     <h1>Note to All Students:</h1>
    <p>If you’ve found any item that matches a message above, please submit it to the College Office. The admin will verify and contact the original owner.</p>
    <h1>[Submit New Lost Report]</h1>
    <p>📌 All students of Mailam Engineering College can submit reports to make them visible here and increase the chance of recovery.</p>   
    </div>
    <footer><Footer/></footer>
    </>

  );
}

export default StudentRequest;
