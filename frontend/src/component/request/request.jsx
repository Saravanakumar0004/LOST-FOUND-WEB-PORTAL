import  { useState } from 'react';
import './request.css';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer'

function Request() {
  const [requestdata, setrequestdata] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    description: '',
  });

  const { name, email, department, subject, description } = requestdata;

  const onChange = (e) => {
    setrequestdata((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value,
}));
  };

  const navigate = useNavigate();

  const onsubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Optional: Add token if needed
        // 'Authorization': `Bearer ${yourToken}`
      },
      body: JSON.stringify(requestdata),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.log('Success:', data);
    alert('🎉 Thank You. Your lost item report has been submitted successfully. We will keep it visible so that others can help find it.');

    // Reset the form
    setrequestdata({
      name: '',
      email: '',
      department: '',
      subject: '',
      description: '',
    });
  navigate('/');
  } catch (err) {
    console.error('Error:', err.message);
    alert('Failed to submit request');
  }
};


  return (
    <>
      <Navbar />
      <section className='container-fluid'>
        <div className="row">
           <div className="col-lg-6 colume request">
            <h1>Submit a Lost Item Report</h1>
            <p>Lost something? Fill out the form below to report it. Your report will be publicly visible to help other students and staff assist in finding it.</p>
            <p>-Your report is posted on the campus Lost & Found board.</p>
            <p>-Other students might have seen or picked up your item.</p>
            <p>-If someone submits it to the office, admin can match it easily.</p>
            <h1>Lost Item Report Form</h1>
            <p><b>Fields to Include in the Form:</b></p>
            <p>1. Item Name (e.g., ID card, wallet, pen drive)</p>
            <p>2. Your Name & Roll Number</p>
            <p>3. Brief Description (color, brand, marks, contents)</p>
            <p>4.Contact Info (email or phone number)</p>
           </div>
          <div className="col-lg-6 colume2 request">
             <h1 className='topic'>Send Report</h1>
      <div className="form">
        <form onSubmit={onsubmit}>
          <div className="form-group"> 
            <input
            type="text"
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Full Name*'
            onChange={onChange}
          /></div>

           <div className="form-group"> 
            <input
            type="email"
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Email Address *'
            onChange={onChange}
          /></div>

           <div className="form-group"> 
            <input
            type="text"
            className='form-control'
            id='department'
            name='department'
            value={department}
            placeholder='Department *'
            onChange={onChange}
          /></div>

           <div className="form-group"> 
            <input
            type="text"
            className='form-control'
            id='subject'
            name='subject'
            value={subject}
            placeholder='Enter Subject *'
            onChange={onChange}
          /></div>

           <div className="form-group"> 
            <textarea
            type="text"
            className='form-control'
            id='description'
            name='description'
            value={description}
            placeholder='Enter Description *'
            onChange={onChange}
          /></div>

          <div className="from-group">
            <button type="submit" className='btn btn-primary2'>submit</button>
          </div>
        </form>
      </div>
          </div>
        </div>
      </section>
      <footer><Footer/></footer>
    </>
  );
}


export default Request;