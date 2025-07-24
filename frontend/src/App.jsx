import { useState } from 'react'
import Footer from './component/footer/footer.jsx'
import Navbar from './component/navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import './App.css'
function App() {
  const Navigate = useNavigate();
  return (
    <>
    <navbar><Navbar/></navbar> 
    <div className='container-fluid home'>
      <div className='row'>
        <div className="col-lg-6">
          <img  src="/Campus View of Mailam Engineering College Villupuram_Campus-view.png" alt="Mailam Engineering College Logo.png" className='img-fluid image' />
          </div>  
        <div className="col-lg-6 text">
          <h1>Mailam Engineering College Lost & Found Portal</h1>
          <p>A trusted system to help MEC students recover lost items and claim them securely from the College Office.</p>
          <h3>Lost Something ?</h3>
          <p>If you’ve lost something on campus — like your ID card, wallet, keys, or USB etc... — we’re here to help.</p>
          <p><b>What you can do :</b></p>
          <p>- Submit a Lost Item report with things details.</p>
          <p>- Regularly check the Found Items listed by the College Office.</p>
          <p>- If you see your item listed, go to the College Office and provide proof to claim it.</p>
          <button onClick={() => Navigate('/request')}>Submit Report </button> 
          </div>  
    </div>
    </div>
    <div className="container-fluid home2">
      <div className="row">
        <div className="col-lg-6 text2">
          <h2>Found Something ?</h2>
          <p>Found an item around the campus ?</p>
          <p>Please submit it directly to the College Office.</p>
          <p>❌ Students cannot post found items online.</p>
          <p>✅ Only the Admin (College Office) can upload verified found items.</p><br /><br />
          <h2> Verified Found Items (Posted by Office Admin)</h2>
          <p>Here are items that have been found and submitted to the office.</p>
          <p><b>If you see something that belongs to you:</b></p>
          <p>Go to the College Office in person and provide proof to claim it.</p>
          <p>You must bring proof or detailed description of the item.</p>
          <button onClick={() => Navigate('/studentthinks')}>View All Found Items</button> 
        </div>  
        <div className="col-lg-6 text2">
          <h2>Claim Instructions:</h2>
          <p><b>If you lost something and found it listed above:</b></p>
          <p>1. Visit the Mailam Engineering College Office.</p>
          <p>2. Provide a valid description or proof (like color, brand, contents, etc.).</p>
          <p>3. If your proof matches, the item will be returned to you.</p>
          <h2>How It Works</h2>
          <p>1. Students submit Lost Item Reports.</p>
          <p>2. Found items are submitted to the Mailam Engineering College Office.</p>
          <p>3. Admin verifies and posts the found items.</p>
          <p>4. Students browse found items and submit a claim request.</p>
          <p>5. Admin checks proof and hands over items to the rightful owner.</p>
          <h2>Let’s Keep Mailam Honest & Responsible</h2>
          <p>Found something? Be kind — hand it in at the College Office.</p>
          <p>Lost something? Use this portal — we’re here to help you recover it.</p>
          <p>Together, we make Mailam Engineering College a caring campus.</p>
        </div>  
      </div>
    </div>
    <footer><Footer/></footer>  
    </>
  )
}

export default App
