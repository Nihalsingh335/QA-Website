import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Project Overview Section */}
      <section className="project-overview">
        <h2>Project Overview</h2>
        <p>
          This project is designed to help developers and testers by providing
          an integrated platform with essential developer tools and testing
          capabilities. It includes features such as a ping test, HTTP request
          tool, JSON formatter, and code snippet storage.
        </p>
      </section>

      {/* Objective Section */}
      <section className="objective">
        <h2>Objective</h2>
        <p>
          The main objective of this project is to simplify the workflow for
          developers and testers, allowing them to test, debug, and improve
          their code more efficiently.
        </p>
      </section>

      {/* Goals Section */}
      <section className="goals">
        <h2>Goals</h2>
        <ul>
          <li>Provide a seamless experience for developers and testers</li>
          <li>Ensure high performance and security</li>
          <li>Make the platform user-friendly and responsive</li>
          <li>Enable easy debugging and real-time reporting</li>
        </ul>
      </section>

      {/* Technologies Used Section */}
      <section className="technologies-used">
        <h2>Technologies Used</h2>
        <ul>
          <li>React.js (Frontend)</li>
          <li>Node.js & Express (Backend)</li>
          <li>MongoDB (Database)</li>
          <li>JWT for Authentication</li>
          <li>Axios for HTTP Requests</li>
          <li>CSS for Styling</li>
        </ul>
      </section>

      {/* Challenges and Solutions Section */}
      <section className="challenges">
        <h2>Challenges and Solutions</h2>
        <p>
          <strong>Challenge:</strong> Managing secure authentication and protecting API routes.<br />
          <strong>Solution:</strong> Used JWT-based authentication and protected routes to ensure security.
        </p>
        <p>
          <strong>Challenge:</strong> Creating a responsive and user-friendly interface.<br />
          <strong>Solution:</strong> Built a responsive design using CSS and ensured consistent UI/UX.
        </p>
      </section>

      {/* Future Scope Section */}
      <section className="future-scope">
        <h2>Future Scope</h2>
        <p>
          In the future, we plan to integrate more advanced developer tools,
          such as performance monitoring, error tracking, and enhanced
          collaboration features.
        </p>
      </section>
    </div>
  );
};

export default About;
