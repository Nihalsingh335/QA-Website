import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DeveloperDashboard from './components/DeveloperDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
