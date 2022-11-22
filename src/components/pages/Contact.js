import React from "react";
import '../styles/ContactPage.css';

export default function Contact() {
  return (
    <div className="container">
      <div class="row">
        <h1 className="contact-header">Contact Me:</h1>
      </div>
      <div class="row input-container">
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input type="text" required />
            <label>Name</label>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="styled-input">
            <input type="text" required />
            <label>Email</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <textarea required></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="btn-lrg submit-btn">Send Message</div>
        </div>
      </div>
    </div>
  );
}

// CONTACT SECTION BUT MUST CHANGE ORDER IN NAVTABS BECAUSE
// RN THE BLOG PRECEDES THIS SECTION

// NEED TO CREATE A CONTACT FORM WITH NAME, EMAIL AND MESSAGE
// FIELD MUST BE REQUIRED
// MUST BE VALID EMAIL ADDRESS
