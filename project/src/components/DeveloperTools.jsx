import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './DeveloperTools.css';

const DeveloperTools = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [image, setImage] = useState(null);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, image }]);
      setTaskInput('');
      setImage(null);
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="developer-tools">
      <h2>Developer Tools</h2>
      <div className="tools-list">
        <button className="tool-btn" onClick={() => navigate('/code-editor')}>Code Editor</button>
        <button className="tool-btn" onClick={() => window.open('https://github.com', '_blank')}>GitHub Tools</button>
        <button className="tool-btn" onClick={() => navigate('/file-storage')}>File Storage</button>
        <div className="tool-dropdown">
          <button className="tool-btn">UI/UX Tools ▼</button>
          <div className="dropdown-content">
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">View in Figma</a>
            <a href="https://www.photopea.com" target="_blank" rel="noopener noreferrer">Image Editor</a>
            <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">Adobe Illustrator</a>
          </div>
        </div>
      </div>
      
      <div className="live-status">
        <h3>Live Project Status</h3>
        <p>Current Task: Implementing API Integration</p>
        <p>Status: In Progress ⏳</p>
      </div>

      <div className="task-board">
        <h3>Ongoing Bugs / Changes / Completed Tasks</h3>
        <input
          type="text"
          placeholder="Add a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={addTask}>Attach & Add Task</button>
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className="task-item">
              <p>{task.text}</p>
              {task.image && <img src={task.image} alt="Attached" className="task-image" />}
              <button onClick={() => removeTask(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperTools;
