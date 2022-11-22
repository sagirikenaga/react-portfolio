import React, { useState } from "react";
import "../styles/ContactPage.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // I don't think this function works hehe 
  const isValidEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      !isValidEmail(email)
    ) {
      setError(true);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div class="row">
        <h1 className="contact-header">Contact Me:</h1>
      </div>
      <div class="row input-container">
        <div>
          <div class="styled-input wide">
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
            {error && name.length <= 0 ? (
              <label>Name cannot be empty.</label>
            ) : (
              "Name*"
            )}
          </div>
        </div>
        <div>
          <div class="styled-input">
            <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
            {error && email.length <= 0 && !isValidEmail(email) ? (
              <label>Please enter a valid email address.</label>
            ) : (
              "Email*"
            )}
          </div>
        </div>
        <div>
          <div class="styled-input wide">
            <textarea placeholder="Write Message Here" onChange={(e) => setMessage(e.target.value)}></textarea>
            {error && message.length <= 0 ? (
              <label>Message cannot be empty.</label>
            ) : (
              "Message*"
            )}
          </div>
        </div>
        <div>
          <button class="btn-lrg submit-btn">Send Message</button>
        </div>
      </div>
    </form>
  );
}

// CONTACT SECTION BUT MUST CHANGE ORDER IN NAVTABS BECAUSE
// RN THE BLOG PRECEDES THIS SECTION

// NEED TO CREATE A CONTACT FORM WITH NAME, EMAIL AND MESSAGE
// FIELD MUST BE REQUIRED
// MUST BE VALID EMAIL ADDRESSi
