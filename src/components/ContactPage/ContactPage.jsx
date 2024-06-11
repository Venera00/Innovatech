import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Address: 123 Innovatech Blvd, Tech City</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@innovatech.com</p>
      <form>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="contact-name" type="text" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="contact-email" type="email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="contact-message"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
