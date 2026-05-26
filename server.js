const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files: index.html, thank-you.html, CSS, JS, images
app.use(express.static(__dirname));

// API
app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Thank you page
app.get('/thank-you.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'thank-you.html'));
});

// Fallback: only unknown routes go to home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Live: http://localhost:${PORT}`);
});