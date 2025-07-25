const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const LOG_FILE = path.join(__dirname, 'logs.json');

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123'; // TODO: Replace with secure env vars in production

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure logs file exists
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, JSON.stringify([]));
}

// Log POST route
app.post('/log', (req, res) => {
  const { domain, userAgent, user = 'default_user' } = req.body;
  const logs = JSON.parse(fs.readFileSync(LOG_FILE));
  const newEntry = {
    domain,
    userAgent,
    user,
    timestamp: new Date().toISOString()
  };
  logs.unshift(newEntry);
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
  console.log('✅ Logged:', newEntry);
  res.sendStatus(200);
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Check-auth (stub — always returns authenticated for now)
app.get('/check-auth', (req, res) => {
  res.json({ authenticated: true }); // Replace with real auth/session logic if needed
});

// Admin dashboard (secured by client-side check)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Logs API
app.get('/api/logs', (req, res) => {
  const logs = JSON.parse(fs.readFileSync(LOG_FILE));
  res.json(logs);
});

// Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
