import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle feature click and navigate to the details page
  const handleFeatureClick = (featureId) => {
    navigate(`/feature/${featureId}`);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <ul>
          <li onClick={() => handleFeatureClick('user-management')}>User Management</li>
          <li onClick={() => handleFeatureClick('search-filtering')}>Search and Filtering</li>
          {/* <li onClick={() => handleFeatureClick('notifications-alerts')}>Notifications and Alerts</li> */}
          <li onClick={() => handleFeatureClick('performance-monitoring')}>Performance Monitoring</li>
          {/* <li onClick={() => handleFeatureClick('logging-reporting')}>Logging and Reporting</li> */}
          <li onClick={() => handleFeatureClick('integration-api')}>Integration and API Support</li>
          <li onClick={() => handleFeatureClick('automation-scheduling')}>Automation and Scheduling</li>
          {/* <li onClick={() => handleFeatureClick('security-features')}>Security Features</li> */}
          {/* <li onClick={() => handleFeatureClick('collaboration-tools')}>Collaboration Tools</li> */}
          <li onClick={() => handleFeatureClick('developer-tools')}>Developer Tools</li>
          {/* <li onClick={() => handleFeatureClick('test-case-management')}>Test Case Management</li> */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <button className="open-btn" onClick={toggleSidebar}>
          ☰ Open Sidebar
        </button>
        <h2>Welcome to the Dashboard</h2>
        <p>Select a feature from the sidebar to view details.</p>
      </div>
    </div>
  );
};

export default Dashboard;
