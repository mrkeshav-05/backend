require ('dotenv').config();

const express = require('express');
const app = express();
const port = 4000

app.get('/', (req, res) => {
  res.send('keshav is liistenning')
})

app.get('/home', (req, res) => {
  res.send('this is home page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})