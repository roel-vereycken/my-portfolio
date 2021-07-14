import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <h2>Prentje</h2>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>I will reply asap</span>}
        </form>
      </div>
    </div>
  );
}
