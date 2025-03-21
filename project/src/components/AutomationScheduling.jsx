import { useState } from 'react';
import './AutomationScheduling.css';

const AutomationScheduling = () => {
  const [testCases, setTestCases] = useState([
    { id: 1, name: 'Login Test', status: 'Pending' },
    { id: 2, name: 'Signup Test', status: 'Completed' }
  ]);
  const [schedules, setSchedules] = useState([
    { id: 1, project: 'QA Project', lastUpdated: '2025-03-21' }
  ]);

  const addTestCase = () => {
    const newCase = { id: Date.now(), name: 'New Test Case', status: 'Pending' };
    setTestCases([...testCases, newCase]);
  };

  const deleteTestCase = (id) => {
    setTestCases(testCases.filter(tc => tc.id !== id));
  };

  const addSchedule = () => {
    const newSchedule = { id: Date.now(), project: 'New Project', lastUpdated: new Date().toISOString().split('T')[0] };
    setSchedules([...schedules, newSchedule]);
  };

  return (
    <div className="automation-scheduling">
      <h2>Automation & Scheduling</h2>

      <div className="test-cases">
        <h3>Test Cases</h3>
        <button onClick={addTestCase} className="add-btn">Add Test Case</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map(tc => (
              <tr key={tc.id}>
                <td>{tc.id}</td>
                <td contentEditable>{tc.name}</td>
                <td contentEditable>{tc.status}</td>
                <td>
                  <button onClick={() => deleteTestCase(tc.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="scheduling">
        <h3>Scheduling</h3>
        <button onClick={addSchedule} className="add-btn">Add Schedule</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Project</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(sc => (
              <tr key={sc.id}>
                <td>{sc.id}</td>
                <td contentEditable>{sc.project}</td>
                <td contentEditable>{sc.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AutomationScheduling;
