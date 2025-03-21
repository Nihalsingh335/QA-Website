import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">QA Tools</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          {/* <li><Link to="/demo">Demo</Link></li> */}
          {/* <li><Link to="/results">Results</Link></li> */}
          {/* <li><Link to="/documentation">Documentation</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          {/* ✅ New links for Login, Register, and Dashboard */}
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/developer-dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
