import { useState } from 'react';
import './IntegrationApi.css';

const IntegrationApi = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTestApi = async () => {
    if (!url) return;
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const options = { method };
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError('Error fetching API response. Check the URL or network connection.');
    }
    setLoading(false);
  };

  return (
    <div className="integration-api">
      <h2>API Integration & Testing</h2>
      <input 
        type="text" 
        placeholder="Enter API URL..." 
        value={url} 
        onChange={(e) => setUrl(e.target.value)}
        className="api-input"
      />
      <select value={method} onChange={(e) => setMethod(e.target.value)} className="method-select">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <button onClick={handleTestApi} className="test-btn">Test API</button>
      
      {loading && <p className="loading">Testing API...</p>}
      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response-box">
          <h3>API Response</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default IntegrationApi;
