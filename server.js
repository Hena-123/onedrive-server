// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 5001;

// Replace with your OneDrive link
// const onedriveFileUrl = 'https://1drv.ms/x/c/5c6e877f08c5aa3b/EY7xomSePCFGhVytRuxQeAIBdA5x5Pqq2qTVcyQHvV5YlA';
const onedriveFileUrl = 'https://onedrive.live.com/edit?id=5C6E877F08C5AA3B!s64a2f18e3c9e4621855cad46ec507802&resid=5C6E877F08C5AA3B!s64a2f18e3c9e4621855cad46ec507802&cid=5c6e877f08c5aa3b&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy81YzZlODc3ZjA4YzVhYTNiL0VZN3hvbVNlUENGR2hWeXRSdXhRZUFJQmRBNXg1UHFxMnFUVmN5UUh2VjVZbEE&migratedtospo=true&wdo=2?download=1';

app.get('/fetch-excel', async (req, res) => {
  try {
    const response = await axios.get(onedriveFileUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching Excel file:', error);
    res.status(500).send('Error fetching file');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
