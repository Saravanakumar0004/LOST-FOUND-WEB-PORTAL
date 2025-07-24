import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import "./thingsdetials.css"; // ✅ match spelling
import Footer from '../footer/footer';
function ThingsDetails() {
  const { id } = useParams();
  const [thing, setThing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
   const fetchThing = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/users/${id}`);
    if (!res.ok) {
      const errText = await res.text(); // get raw HTML error
      throw new Error(`Item not found. Server says: ${errText}`);
    }
    const data = await res.json();
    setThing(data);
  } catch (err) {
    console.error('❌ Fetch error:', err.message);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


    fetchThing();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <navbar><Navbar/></navbar>
    <div className="details container">
      <h1>{thing.topic}</h1>
      <img className='img-fluid p-2'  src={thing.image} alt="Found item" />
      <p><strong>Description:</strong> {thing.description}</p>
      <p><strong>Submit Date:</strong> {thing.date}</p><p><strong>Submit Time:</strong> {thing.time}</p>
    <div className="thank-you-box p-4 mt-5  rounded">
    <h1 className='textsuccess'>Appreciation from the College Principal</h1>
  <p>We sincerely appreciate the kind and honest act of <b>{thing.studentName}</b>  from the <b>{thing.department}</b> department in submitting the found item. It reflects the values of integrity and responsibility that our institution upholds. Your thoughtful action sets a positive example for all students on campus. The College Principal extends heartfelt thanks for your sincerity. Acts like yours build a culture of trust and respect within our college. You have helped ensure that lost items can be safely returned to their rightful owners. Your sense of duty and discipline brings pride to the college community. We are truly proud to have such responsible students among us. Your contribution, though small, makes a big difference. Thank you once again for being a role model at Mailam Engineering College.</p>
  <p className="fw-bold">We are proud of you, <b>{thing.studentName}! 💐</b></p>
</div>

    </div>
    <footer><Footer/></footer>
    </>
    
  );
}

export default ThingsDetails;
