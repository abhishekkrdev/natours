const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello From server side!', app: 'Natours' });
});

app.post('/', (_, res) => {
  res.send('A sample post request');
});

const port = 3000;

app.listen(port, () => {
  console.log(`App Running on port ${port}...`);
});
