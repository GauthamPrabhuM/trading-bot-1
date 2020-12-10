const express = require('express');

const app = express();

app.use(express.static('./client/build'));

// app.get('/', (req, res) => {
//     console.log('Got a get request');
// });

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});