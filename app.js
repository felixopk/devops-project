const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ status: 'Healthy' }));
app.listen(3000, () => console.log('App running on port 3000'));

