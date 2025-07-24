import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import "./contact.css";
import Footer from "../footer/footer";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const { name, email, mobileNumber, message } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost:5000/api/contacts", formData);
      console.log("Response:", res.data);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", mobileNumber: "", message: "" });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contactimg">
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="content">
        <h1>We'd Love To Hear From You</h1>
          <div className="row data">
        <div className="col-lg-4">
          <h2>Find us Here</h2>
          <p>Mailam Engineering College,</p>
          <p>Mailam – 604304, Tindivanam Taluk,</p>
          <p>Villupuram District.</p>
        </div>
        <div className="col-lg-4">
          <h2>Get In touch</h2>
          <p>Phone: 04147-241515/241551,</p>
          <p>Fax: 04147-241552</p>
        </div>
        <div className="col-lg-4">
          <h2>Principal</h2>
          <p>Please send your valuable feedback to</p>
          <p>principal@mailamengg.com</p>
        </div>
      </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group contact2">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Full name*"
              required
            />
          </div>

          <div className="form-group contact2">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
            />
          </div>

          <div className="form-group contact2">
            <input
              type="text"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number*"
              required
            />
          </div>

          <div className="form-group contact2">
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Leave a message (Optional)"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
      <footer><Footer/></footer>
    </>
  );
}

export default Contact;
