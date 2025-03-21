import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT
    navigate('/login'); // Redirect to login page
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
