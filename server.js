const express = require('express');
const path = require('path');
app = express();
PORT = process.env.PORT || 3000;

// Serve ALL files from folder (CSS/JS/images)
app.use(express.static(path.join(__dirname), { 
  index: false,
  fallthrough: true 
}));

// API
app.get('/api/health', (req, res) => res.json({ok:true}));

// index.html for all pages/sections
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Live: http://localhost:${PORT}`));