import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
 import About from './components/About';
 import Home from './components/Home';
 import Features from './components/Features';
 import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import FeatureDetails from './components/FeatureDetails';
import UserManagement from './components/UserManagement';
import SearchFiltering from './components/SearchFiltering'
import PerformanceMonitoring from './components/PerformanceMonitoring';
import IntegrationApi from './components/IntegrationApi';
import AutomationScheduling from './components/AutomationScheduling';
import DeveloperTools from './components/DeveloperTools';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        { <Route path="/" element={<Home />} /> }
        { <Route path="/about" element={<About />} /> } 
        {<Route path="/features" element={<Features />} /> }   
        { <Route path="/contact" element={<Contact />} /> }
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {<Route path="/developer-dashboard" element={<Dashboard />} /> }
        <Route path="/feature/:id" element={<FeatureDetails />} />
        <Route path="/user-management" element={<UserManagement />}/>
        <Route path="/search-filtering" element={<SearchFiltering />}/>
        <Route path="/performance-monitoring" element={<PerformanceMonitoring />}/>
        <Route path="/integration-api" element={<IntegrationApi />}/>
        <Route path="/automation-scheduling" element={<AutomationScheduling />}/>
        <Route path="/developer-tools" element={<DeveloperTools />}/>
      
      </Routes>
    </Router>
  );
}

export default App;
