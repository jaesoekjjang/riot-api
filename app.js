const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Temporary server for riot api')
})

app.listen(8000, () =>{
  console.log('server on')
})