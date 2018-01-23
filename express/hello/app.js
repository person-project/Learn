const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/example/a', function (req, res) {
  console.log('访问了 example/a');
  res.send('example a')
})

app.listen(3000);
