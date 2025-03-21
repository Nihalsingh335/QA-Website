import { useState } from 'react';
import './SearchFiltering.css';

const data = [
  { id: 1, title: 'User Management', category: 'Dashboard', description: 'Manage user accounts and roles.' },
  { id: 2, title: 'Search and Filtering', category: 'Dashboard', description: 'Search and filter data easily.' },
  { id: 3, title: 'Notifications and Alerts', category: 'Notifications', description: 'Get real-time alerts.' },
  { id: 4, title: 'Performance Monitoring', category: 'Monitoring', description: 'Monitor app performance.' },
  { id: 5, title: 'Logging and Reporting', category: 'Reports', description: 'View logs and generate reports.' },
  { id: 6, title: 'Integration and API Support', category: 'Integration', description: 'Connect with third-party APIs.' },
  { id: 7, title: 'Automation and Scheduling', category: 'Automation', description: 'Automate tasks and schedules.' },
  { id: 8, title: 'Security Features', category: 'Security', description: 'Ensure secure authentication.' },
  { id: 9, title: 'Collaboration Tools', category: 'Collaboration', description: 'Work with team members efficiently.' },
  { id: 10, title: 'Test Case Management', category: 'Testing', description: 'Manage and execute test cases.' }
];

const categories = ['All', 'Dashboard', 'Notifications', 'Monitoring', 'Reports', 'Integration', 'Automation', 'Security', 'Collaboration', 'Testing'];

const SearchFiltering = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = data.filter(item =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="search-filtering-container">
      <div className="search-section">
        <h2>Search Features</h2>
        <input
          type="text"
          placeholder="Search features..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="filter-results-container">
        <div className="filter-options">
          <h3>Filter by Category</h3>
          {categories.map(category => (
            <button 
              key={category} 
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`} 
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="results">
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <div key={item.id} className="result-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="category">{item.category}</span>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFiltering;
