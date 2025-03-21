import { useState } from 'react';
import axios from 'axios';

const DeveloperDashboard = () => {
  const [pingUrl, setPingUrl] = useState('');
  const [pingResult, setPingResult] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [httpUrl, setHttpUrl] = useState('');
  const [httpResult, setHttpResult] = useState('');
  const [snippet, setSnippet] = useState('');
  const [savedSnippets, setSavedSnippets] = useState([]);

  // ========== PING TEST ==========
  const handlePingTest = async () => {
    try {
      const response = await axios.get(pingUrl);
      setPingResult(`✅ Success: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setPingResult(`❌ Error: ${error.message}`);
    }
  };

  // ========== JSON FORMATTER ==========
  const handleFormatJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      setFormattedJson('❌ Invalid JSON');
    }
  };

  // ========== HTTP REQUEST ==========
  const handleHttpRequest = async () => {
    try {
      const response = await axios.get(httpUrl);
      setHttpResult(`✅ Success: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setHttpResult(`❌ Error: ${error.message}`);
    }
  };

  // ========== CODE SNIPPET STORAGE ==========
  const handleSaveSnippet = () => {
    if (snippet.trim() !== '') {
      setSavedSnippets([...savedSnippets, snippet]);
      setSnippet('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Developer Dashboard</h2>

      {/* ======== PING TEST ======== */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter URL to Ping"
          value={pingUrl}
          onChange={(e) => setPingUrl(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={handlePingTest} className="bg-blue-500 text-white p-2 mt-2">
          Ping
        </button>
        <p>{pingResult}</p>
      </div>

      {/* ======== JSON FORMATTER ======== */}
      <div className="mb-4">
        <textarea
          placeholder="Paste JSON here"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="border p-2 w-full"
          rows="4"
        />
        <button onClick={handleFormatJson} className="bg-green-500 text-white p-2 mt-2">
          Format JSON
        </button>
        <pre className="bg-gray-100 p-2 mt-2">{formattedJson}</pre>
      </div>

      {/* ======== HTTP REQUEST TESTER ======== */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter URL for HTTP Request"
          value={httpUrl}
          onChange={(e) => setHttpUrl(e.target.value)}
          className="border p-2 w-full"
        />
        <button onClick={handleHttpRequest} className="bg-purple-500 text-white p-2 mt-2">
          Send Request
        </button>
        <pre className="bg-gray-100 p-2 mt-2">{httpResult}</pre>
      </div>

      {/* ======== CODE SNIPPET STORAGE ======== */}
      <div>
        <textarea
          placeholder="Save code snippet here"
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
          className="border p-2 w-full"
          rows="4"
        />
        <button onClick={handleSaveSnippet} className="bg-yellow-500 text-white p-2 mt-2">
          Save Snippet
        </button>
        <ul className="mt-2">
          {savedSnippets.map((item, index) => (
            <li key={index} className="bg-gray-100 p-2 mt-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
