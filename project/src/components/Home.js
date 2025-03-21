import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Your one-stop solution for developers and testers!</p>
        <button>Get Started</button>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>About Our Platform</h2>
        <p>
          Our platform helps developers and testers streamline their workflow
          with powerful tools and seamless integration.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Ping Test Tool</li>
          <li>HTTP Request Tool</li>
          <li>JSON Formatter</li>
          <li>Code Snippet Storage</li>
          <li>Real-time Logs</li>
        </ul>
      </section>

      {/* Why Choose This Platform? Section */}
      <section className="why-choose">
        <h2>Why Choose This Platform?</h2>
        <p>
          Fast, secure, and developer-friendly. Our platform empowers you to
          focus on building great products.
        </p>
      </section>

      {/* Demo/Preview Section */}
      <section className="demo">
        <h2>Live Demo</h2>
        <img src="https://via.placeholder.com/600x300" alt="Demo preview" />
        <p>See how it works in action!</p>
      </section>

      {/* Testimonials/Feedback Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          "This platform has transformed the way we work. Highly recommended!"
        </blockquote>
        <cite>- John Doe, Developer</cite>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button>Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
