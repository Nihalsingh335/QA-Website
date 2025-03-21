import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent: ${message}`);
    setMessage('');
  };

  return (
    <div className="contact-container">
      {/* Owner Info Section */}
      <div className="owner-section">
        <img
          src="https://via.placeholder.com/150" // Replace with actual owner image URL
          alt="Owner"
          className="owner-image"
        />
        <div className="owner-info">
          <h2>John Doe</h2>
          <p>Founder & Developer</p>
          <p>Email: johndoe@example.com</p>
          <p>Phone: +1-234-567-890</p>
        </div>
      </div>

      {/* Email Subscription */}
      <div className="subscription-section">
        <h3>Subscribe for Updates</h3>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h3>Contact Us</h3>
        <form onSubmit={handleContactSubmit}>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Support Button */}
      <button className="support-btn" onClick={() => alert('Support contacted!')}>
        Support
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 YourWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
