const express = require('express');
const api = express();

api.get('/', (_req, res) => {
  res.status(200).send('Hello World');
});

api.listen(3001, () => {
  console.log('Server is running on port 3001');
});