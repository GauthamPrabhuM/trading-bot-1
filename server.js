const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', (req, res) => {
  console.log('got a /ping request');
  res.json({
    message: 'Pong',
  });
});

app.listen(process.env.PORT || 9000);
