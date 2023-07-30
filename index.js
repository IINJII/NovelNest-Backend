const express = require('express');
const app = express();
const mongoConnect = require('./db');
const cors = require('cors')
const port = 3000;

app.use(express.json());
app.use(cors());

mongoConnect();

app.use('/api/auth', require('./route/auth'));
app.use('/api/book', require('./route/book'));

app.listen(port, () => {
  console.log(`Backend Example app listening on http://localhost:${port}`)
})