const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'mysecretkey';

app.use(cors());
app.use(express.json());

// ======== SAMPLE USER DATA ========
const users = [
  {
    id: 1,
    name: 'Nihal',
    email: 'nihal@gmail.com',
    password: bcrypt.hashSync('1234', 10),
    phone: '1234567890',
    address: '123 Street, City',
    city: 'Mumbai',
    state: 'Maharashtra',
    landmark: 'Near Mall',
    age: 25,
    gender: 'male'
  }
];

// ======== MIDDLEWARE TO VERIFY TOKEN ========
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// ======== AUTH ROUTES ========
// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      landmark: user.landmark,
      age: user.age,
      gender: user.gender
    },
    SECRET_KEY,
    { expiresIn: '1h' }
  );

  res.json({ message: 'Login successful', token });
});

// Register Route
app.post('/register', async (req, res) => {
  const {
    name,
    email,
    password,
    confirmPassword,
    phone,
    address,
    city,
    state,
    landmark,
    age,
    gender
  } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    city,
    state,
    landmark,
    age,
    gender
  };

  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

// ======== GET PROFILE ROUTE ========
app.get('/profile', verifyToken, (req, res) => {
  const user = users.find(user => user.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    city: user.city,
    state: user.state,
    landmark: user.landmark,
    age: user.age,
    gender: user.gender
  });
});

// ======== DEVELOPER DASHBOARD ROUTES ========
// Sample API Endpoint for Testing
app.get('/test-api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Protected Logs Route (Requires JWT)
app.get('/logs', verifyToken, (req, res) => {
  res.json({
    logs: [
      { id: 1, message: 'Server started', timestamp: new Date().toISOString() },
      { id: 2, message: 'User logged in', timestamp: new Date().toISOString() },
      { id: 3, message: 'New user registered', timestamp: new Date().toISOString() },
    ]
  });
});

// ======== PING TEST ROUTE ========
const axios = require('axios');
app.get('/ping', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Ping failed', error: error.message });
  }
});

// ======== HTTP REQUEST TEST ROUTE ========
app.get('/http-request', async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Request failed', error: error.message });
  }
});

// ======== DEFAULT ROUTE ========
app.get('/', (req, res) => {
  res.send('✅ Server is running...');
});

// ======== START SERVER ========
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
