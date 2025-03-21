import { useState } from 'react';
import './UserManagement.css';
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', active: true },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', active: true },
  { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Editor', active: false },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  // Toggle user active state
  const toggleActive = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Open Modal for Editing
  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData(user);
    setIsModalOpen(true);
  };

  // Open Modal for Adding
  const openAddModal = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', role: '' });
    setIsModalOpen(true);
  };

  // Handle Form Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save User (Add or Edit)
  const saveUser = () => {
    if (editingUser) {
      // Update existing user
      setUsers(
        users.map(user =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      // Add new user
      const newUser = {
        id: users.length + 1,
        ...formData,
        active: true
      };
      setUsers([...users, newUser]);
    }

    setIsModalOpen(false);
  };

  // Filtered users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      {/* Search and Add User */}
      <div className="user-header">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={openAddModal} className="add-user-btn">
          + Add User
        </button>
      </div>

      {/* User List */}
      <div className="user-list">
        {filteredUsers.map(user => (
          <div key={user.id} className={`user-card ${user.active ? 'active' : 'inactive'}`}>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => toggleActive(user.id)} className={user.active ? 'deactivate-btn' : 'activate-btn'}>
                {user.active ? 'Deactivate' : 'Activate'}
              </button>
              <button onClick={() => openEditModal(user)} className="edit-btn">
                Edit
              </button>
              <button onClick={() => deleteUser(user.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{editingUser ? 'Edit User' : 'Add User'}</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={formData.role}
              onChange={handleInputChange}
            />
            <button onClick={saveUser} className="save-btn">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
